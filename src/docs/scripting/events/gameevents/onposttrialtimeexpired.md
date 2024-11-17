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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostTrialTimeExpired", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |