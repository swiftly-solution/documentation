---
title: OnGrenadeBounce
index: true
order: 2
category:
  - Guide
---

# OnGrenadeBounce
This event is triggered when grenade_bounce is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnGrenadeBounce", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |