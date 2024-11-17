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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostDoorClosed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entindex` |   `int`   |