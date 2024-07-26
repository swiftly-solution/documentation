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
@event returns void
AddEventHandler("OnHltvChangedMode", function(event --[[ Event ]])
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