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
@event returns void
AddEventHandler("OnPostDronegunAttack", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |