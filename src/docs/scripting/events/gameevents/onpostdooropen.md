---
title: OnPostDoorOpen
index: true
order: 2
category:
  - Guide
---

# OnPostDoorOpen
This event is triggered after door_open is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostDoorOpen", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entindex` |   `int`   |