---
title: OnTerminateRound
index: true
order: 2
category:
  - Guide
---

# OnTerminateRound
This game event is triggered when CGameRules->TerminateRound is being called.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param delay number
--- @param reason number
--- @return number EventResult
--- @event returns boolean Via event:SetReturn
AddEventHandler("OnTerminateRound", function(event, delay, reason)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::