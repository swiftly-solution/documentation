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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnClientsideReloadCustomEcon", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `steamid` |  `string` |