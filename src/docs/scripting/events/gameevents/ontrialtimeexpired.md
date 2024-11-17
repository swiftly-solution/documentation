---
title: OnTrialTimeExpired
index: true
order: 2
category:
  - Guide
---

# OnTrialTimeExpired
This event is triggered when trial_time_expired is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnTrialTimeExpired", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |