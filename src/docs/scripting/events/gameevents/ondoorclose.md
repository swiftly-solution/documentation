---
title: OnDoorClose
index: true
order: 2
category:
  - Guide
---

# OnDoorClose
This event is triggered when door_close is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnDoorClose", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|   `userid`   |   `int`   |
| `checkpoint` | `boolean` |