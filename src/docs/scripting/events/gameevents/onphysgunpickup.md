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
@event returns void
AddEventHandler("OnPhysgunPickup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |