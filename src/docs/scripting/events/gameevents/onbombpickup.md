---
title: OnBombPickup
index: true
order: 2
category:
  - Guide
---

# OnBombPickup
This event is triggered when bomb_pickup is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnBombPickup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |