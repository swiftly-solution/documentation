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
--- @param event Event
--- @param playerid number
--- @param attackerid number
--- @param damageinfo_ptr string
--- @param inflictor_ptr string
--- @param ability_ptr string
--- @return number EventResult
--- @event returns boolean Via event:SetReturn
AddEventHandler("OnPlayerDamage", function(event, playerid, attackerid, damageinfo_ptr, inflictor_ptr, ability_ptr)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::