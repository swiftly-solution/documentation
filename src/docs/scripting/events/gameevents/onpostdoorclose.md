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
@event returns void
AddEventHandler("OnPostDoorClose", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|   `userid`   |   `int`   |
| `checkpoint` | `boolean` |