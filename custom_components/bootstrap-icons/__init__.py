import logging

from homeassistant.components.frontend import add_extra_js_url

LOGGER = logging.getLogger(__name__)

DOMAIN = "bootstrap-icons"

DATA_EXTRA_MODULE_URL = 'frontend_extra_module_url'
LOADER_URL = f'/{DOMAIN}/main.js'
LOADER_PATH = f'custom_components/{DOMAIN}/main.js'
ICONS_URL = f'/{DOMAIN}/icons'
ICONS_PATH = f'custom_components/{DOMAIN}/data/icons'

async def async_setup(hass, config):
    hass.http.register_static_path(
            LOADER_URL,
            hass.config.path(LOADER_PATH),
            True
        )
    add_extra_js_url(hass, LOADER_URL)

    hass.http.register_static_path(
                ICONS_URL,
                hass.config.path(ICONS_PATH),
                True
            )

    return True


async def async_setup_entry(hass, entry):
    return True


async def async_remove_entry(hass, entry):
    return True
