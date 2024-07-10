---
title: OnDronegunAttack
index: true
order: 2
category:
  - Guide
---

# OnDronegunAttack
This event is triggered when dronegun_attack is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDronegunAttack", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |