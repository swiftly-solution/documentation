---
title: OnHltvCameraman
index: true
order: 2
category:
  - Guide
---

# OnHltvCameraman
This event is triggered when hltv_cameraman is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHltvCameraman", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |