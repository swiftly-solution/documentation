---
title: OnParachutePickup
index: true
order: 2
category:
  - Guide
---

# OnParachutePickup
This event is triggered when parachute_pickup is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnParachutePickup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |