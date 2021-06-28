const DOMAIN = 'bootstrap-icons';
const PREFIX = 'bi';

const ICON_STORE = {};

const preProcessIcon = async (iconName) => {
  const [icon, format] = iconName.split('#');
  const data = await fetch(`/${DOMAIN}/icons/${icon}.svg`);
  const text = await data.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');

  if (!doc || !doc.querySelector('svg')) return {};

  const viewBox = doc.querySelector('svg').getAttribute('viewBox');
  const _paths = doc.querySelectorAll('path');
  const paths = {};
  let path = '';
  for (const pth of _paths) {
    path = path + pth.getAttribute('d');
    const cls = pth.classList[0];
  }

  // Don't allow full code to be used if the svg may contain javascript
  let fullCode = null;
  const svgEl = doc.querySelector('svg');
  const hasOn = Array.from(svgEl.attributes).some((a) =>
    a.name.startsWith('on')
  );
  if (!hasOn) {
    if (!svgEl.getElementsByTagName('script').length) {
      fullCode = svgEl;
    }
  }

  return { viewBox, path, paths, format, fullCode };
};

const getBootstrapIcon = (iconName) => {
  return new Promise(async (resolve, reject) => {
    const icon = `${PREFIX}:${iconName}`;
    if (ICON_STORE[icon]) resolve(ICON_STORE[icon]);

    ICON_STORE[icon] = preProcessIcon(iconName);

    resolve(ICON_STORE[icon]);
  });
};

window.getBootstrapIcon = getBootstrapIcon;

if (!('customIconsets' in window)) {
  window.customIconsets = {};
}

window.customIconsets['bi'] = (iconName) => getBootstrapIcon(iconName);
