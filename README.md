# hass-bootstrap-icons

This is a blatant rip from the fine [@thomasleven](https://github.com/thomasloven)'s [hass-fontawesome](https://github.com/thomasloven/hass-fontawesome), and I haven't really done anything except modify his code (including this readme). I simply wanted a way to get some icons going for personal use, and this was the best example I had.

Buy him a coffee using the link @ the bottom of this readme :)

Use free icons from the [bootstrap](https://icons.getbootstrap.com/) set in Home-assistant.

# Installation

#### Option 1: Via HACS

_Not yet_

#### Option 2: Manual

Clone this repository or download the source code as a zip file and add/merge the `custom_components/` folder with its contents in your configuration directory.

### Step 2: Restart HA

In order for the newly added integration to be loaded, HA needs to be restarted.

### Step 3: Add integration to HA

In HA, go to Configuration > Integrations.
In the bottom right corner, click the `+ Add Integration` button.

If the component is properly installed, you should be able to find the 'Bootstrap Icons' in the list. You might need to clear you browser cache for the integration to show up.

Select it, and the scheduler integration is ready for use.

# Usage

Find the icon you want in the [gallery](https://icons.getbootstrap.com/#icons).

The prefix for each icon is `bi:`

Example:
- for an outlined alarm clock use `bi:alarm`
- for a filled alarm clock use `bi:alarm-fill`

The icons are useable anywhere in Home Assistant - not only in lovelace.

---

**IMPORTANT:** As the note above implies, SVG can contain CSS and Javascript, and thus shall be considered unsafe. Home Assistant normally protects you from this by unly using a very specific part of the SVG file, but using the `#fullcolor` suffix circumvents this protection. I have tried adding another layer instead, but as those things go, you're only safe from the things you _know_.

In short: Only do this with icons you trust (and preferably have inspected the code for).

---

# FAQ

### Can I set this up in configure.yaml instead?

Yes.

```
bootstrap-icons:
```

That's it.

---

Buy [@thomasleven](https://github.com/thomasloven) a coffee:

<a href="https://www.buymeacoffee.com/uqD6KHCdJ" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
