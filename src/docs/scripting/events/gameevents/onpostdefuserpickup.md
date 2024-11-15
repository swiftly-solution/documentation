---
title: OnPostDefuserPickup
index: true
order: 2
category:
  - Guide
---

# OnPostDefuserPickup
This event is triggered after defuser_pickup is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostDefuserPickup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
|  `userid`  |   `int`   |