---
title: OnPostDronegunAttack
index: true
order: 2
category:
  - Guide
---

# OnPostDronegunAttack
This event is triggered after dronegun_attack is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostDronegunAttack", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |