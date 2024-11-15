---
title: OnPostServerCvar
index: true
order: 2
category:
  - Guide
---

# OnPostServerCvar
This event is triggered after server_cvar is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostServerCvar", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|  `cvarname` |  `string` |
| `cvarvalue` |  `string` |