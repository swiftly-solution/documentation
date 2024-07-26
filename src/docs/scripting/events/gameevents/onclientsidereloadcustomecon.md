---
title: OnClientsideReloadCustomEcon
index: true
order: 2
category:
  - Guide
---

# OnClientsideReloadCustomEcon
This event is triggered when clientside_reload_custom_econ is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnClientsideReloadCustomEcon", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `steamid` |  `string` |