---
title: OnBombPickup
index: true
order: 2
category:
  - Guide
---

# OnBombPickup
This event is triggered when bomb_pickup is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBombPickup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |