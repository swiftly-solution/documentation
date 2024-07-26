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
@event returns void
AddEventHandler("OnPostServerCvar", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|  `cvarname` |  `string` |
| `cvarvalue` |  `string` |