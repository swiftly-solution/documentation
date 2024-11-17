---
title: OnPostGrenadeThrown
index: true
order: 2
category:
  - Guide
---

# OnPostGrenadeThrown
This event is triggered after grenade_thrown is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostGrenadeThrown", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `weapon` |  `string` |