---
title: OnPostParachutePickup
index: true
order: 2
category:
  - Guide
---

# OnPostParachutePickup
This event is triggered after parachute_pickup is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostParachutePickup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |