---
title: Adding Addons
icon: plus
order: 2
index: true
category:
  - Guide
---

# Adding Addons

> [!warning]
> This system is working only with assets addons (player models, sounds, etc.) and it's not working with maps.

To add addons to download you need first to get the Workshop Addon ID which can be located in the Workshop Item URL:

```
https://steamcommunity.com/sharedfiles/filedetails/?id=ID => ID is the Workshop Addon ID
```

Next, you need to modify the `configs/addons.json` file and add the ID to the list of addons:

```json title="addons.json"
{
    ...
    "addons": [
        ...
        "ID",
        ...
    ]
    ...
}
```

And voila, the server will automatically download the addon specified in the configuration file.