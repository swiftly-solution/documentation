---
title: OnPlayerDamage
index: true
order: 2
category:
  - Guide
---

# OnPlayerDamage
This game event is triggered when a player receives damage.
::: tabs
@tab Lua
```lua
@event returns boolean
AddEventHandler("OnPlayerDamage", function(event --[[ Event ]], playerid --[[ number ]], attackerid --[[ number ]], damageinfo_ptr --[[ string ]], inflictor_ptr --[[ string ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::