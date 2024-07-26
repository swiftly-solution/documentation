---
title: OnPostGrenadeBounce
index: true
order: 2
category:
  - Guide
---

# OnPostGrenadeBounce
This event is triggered after grenade_bounce is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostGrenadeBounce", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |