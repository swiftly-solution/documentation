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
@event returns void
AddEventHandler("OnPostBombPickup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |