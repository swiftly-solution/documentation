---
title: OnPostTrialTimeExpired
index: true
order: 2
category:
  - Guide
---

# OnPostTrialTimeExpired
This event is triggered after trial_time_expired is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostTrialTimeExpired", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |