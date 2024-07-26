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
@event returns void
AddEventHandler("OnTrialTimeExpired", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |