---
title: OnPostClientsideReloadCustomEcon
index: true
order: 2
category:
  - Guide
---

# OnPostClientsideReloadCustomEcon
This event is triggered after clientside_reload_custom_econ is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostClientsideReloadCustomEcon", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `steamid` |  `string` |