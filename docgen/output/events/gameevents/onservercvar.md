---
title: OnServerCvar
index: true
order: 2
category:
  - Guide
---

# OnServerCvar
This event is triggered when server_cvar is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnServerCvar", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|  `cvarname` |  `string` |
| `cvarvalue` |  `string` |