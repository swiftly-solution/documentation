---
title: OnPostHltvChangedMode
index: true
order: 2
category:
  - Guide
---

# OnPostHltvChangedMode
This event is triggered after hltv_changed_mode is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostHltvChangedMode", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|   `oldmode`  |   `int`   |
|   `newmode`  |   `int`   |
| `obs_target` |   `int`   |