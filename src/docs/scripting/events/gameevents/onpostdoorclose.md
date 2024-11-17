---
title: OnPostDoorClose
index: true
order: 2
category:
  - Guide
---

# OnPostDoorClose
This event is triggered after door_close is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostDoorClose", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|   `userid`   |   `int`   |
| `checkpoint` | `boolean` |