---
title: OnPostBombPickup
index: true
order: 2
category:
  - Guide
---

# OnPostBombPickup
This event is triggered after bomb_pickup is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostBombPickup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |