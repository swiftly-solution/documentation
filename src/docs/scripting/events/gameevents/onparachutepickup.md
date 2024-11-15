---
title: OnParachutePickup
index: true
order: 2
category:
  - Guide
---

# OnParachutePickup
This event is triggered when parachute_pickup is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnParachutePickup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |