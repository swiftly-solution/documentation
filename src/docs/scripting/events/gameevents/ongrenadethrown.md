---
title: OnGrenadeThrown
index: true
order: 2
category:
  - Guide
---

# OnGrenadeThrown
This event is triggered when grenade_thrown is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnGrenadeThrown", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `weapon` |  `string` |