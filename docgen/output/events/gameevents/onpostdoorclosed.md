---
title: OnPostDoorClosed
index: true
order: 2
category:
  - Guide
---

# OnPostDoorClosed
This event is triggered after door_closed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostDoorClosed", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entindex` |   `int`   |