---
title: OnHltvChangedMode
index: true
order: 2
category:
  - Guide
---

# OnHltvChangedMode
This event is triggered when hltv_changed_mode is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHltvChangedMode", function(event)
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