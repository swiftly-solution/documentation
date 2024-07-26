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
@event returns void
AddEventHandler("OnPostParachuteDeploy", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |