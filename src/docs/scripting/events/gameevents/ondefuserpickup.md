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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnDefuserPickup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
|  `userid`  |   `int`   |