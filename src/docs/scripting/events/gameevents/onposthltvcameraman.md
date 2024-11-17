---
title: OnPostHltvCameraman
index: true
order: 2
category:
  - Guide
---

# OnPostHltvCameraman
This event is triggered after hltv_cameraman is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostHltvCameraman", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |