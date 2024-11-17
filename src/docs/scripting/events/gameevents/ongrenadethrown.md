---
title: OnGrenadeThrown
index: true
order: 2
category:
  - Guide
---

# OnGrenadeThrown
This event is triggered when grenade_thrown is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnGrenadeThrown", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `weapon` |  `string` |