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
@event returns void
AddEventHandler("OnParachuteDeploy", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |