---
title: OnPostPhysgunPickup
index: true
order: 2
category:
  - Guide
---

# OnPostPhysgunPickup
This event is triggered after physgun_pickup is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPhysgunPickup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |