---
title: OnHelicopterGrenadePuntMiss
index: true
order: 2
category:
  - Guide
---

# OnHelicopterGrenadePuntMiss
This event is triggered when helicopter_grenade_punt_miss is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnHelicopterGrenadePuntMiss", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |