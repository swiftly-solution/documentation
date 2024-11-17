---
title: OnPhysgunPickup
index: true
order: 2
category:
  - Guide
---

# OnPhysgunPickup
This event is triggered when physgun_pickup is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPhysgunPickup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |