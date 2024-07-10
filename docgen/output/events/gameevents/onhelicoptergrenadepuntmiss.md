---
title: OnHelicopterGrenadePuntMiss
index: true
order: 2
category:
  - Guide
---

# OnHelicopterGrenadePuntMiss
This event is triggered when helicopter_grenade_punt_miss is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHelicopterGrenadePuntMiss", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |