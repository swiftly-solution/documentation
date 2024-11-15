---
title: OnParachuteDeploy
index: true
order: 2
category:
  - Guide
---

# OnParachuteDeploy
This event is triggered when parachute_deploy is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnParachuteDeploy", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |