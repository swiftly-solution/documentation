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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPhysgunPickup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |