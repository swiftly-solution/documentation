---
title: OnPostHelicopterGrenadePuntMiss
index: true
order: 2
category:
  - Guide
---

# OnPostHelicopterGrenadePuntMiss
This event is triggered after helicopter_grenade_punt_miss is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostHelicopterGrenadePuntMiss", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |