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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostParachutePickup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |