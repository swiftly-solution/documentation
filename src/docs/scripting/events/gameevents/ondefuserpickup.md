---
title: OnDefuserPickup
index: true
order: 2
category:
  - Guide
---

# OnDefuserPickup
This event is triggered when defuser_pickup is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDefuserPickup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
|  `userid`  |   `int`   |