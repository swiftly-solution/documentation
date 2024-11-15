---
title: OnDronegunAttack
index: true
order: 2
category:
  - Guide
---

# OnDronegunAttack
This event is triggered when dronegun_attack is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnDronegunAttack", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |