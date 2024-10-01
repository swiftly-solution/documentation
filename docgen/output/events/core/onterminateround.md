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
@event returns boolean
AddEventHandler("OnTerminateRound", function(event --[[ Event ]], delay --[[ number ]], reason --[[ number ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::