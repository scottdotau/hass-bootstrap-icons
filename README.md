# hass-bootstrap-icons

This is a blatant rip from the fine @thomasloven - I haven't really done anything except modify his code (including this readme). 

Buy him a coffee using the link @ the bottom of this readme :)

Use free icons from the [bootstrap](https://icons.getbootstrap.com/) set in Home-assistant.

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

Buy @thomasloven a coffee: 
<a href="https://www.buymeacoffee.com/uqD6KHCdJ" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
