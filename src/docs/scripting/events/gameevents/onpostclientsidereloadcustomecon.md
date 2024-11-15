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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostClientsideReloadCustomEcon", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `steamid` |  `string` |