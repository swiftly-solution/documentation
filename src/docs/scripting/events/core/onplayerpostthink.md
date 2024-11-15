---
title: OnPlayerPostThink
index: true
order: 2
category:
  - Guide
---

# OnPlayerPostThink
This game event is triggered when the hook CCSPlayerPawnBase_PostThink is being called.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param playerid number
--- @return number EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnPlayerPostThink", function(event, playerid)
    --[[ ... ]]
    return EventResult.Continue
end)
```
#### How can I stop the execution of a User Message?
Simply return `EventResult.Stop` and it will be blocked.
:::