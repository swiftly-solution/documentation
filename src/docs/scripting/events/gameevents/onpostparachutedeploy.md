---
title: OnPostParachuteDeploy
index: true
order: 2
category:
  - Guide
---

# OnPostParachuteDeploy
This event is triggered after parachute_deploy is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostParachuteDeploy", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |