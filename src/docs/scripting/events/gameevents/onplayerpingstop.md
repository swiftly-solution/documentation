---
title: OnPlayerPingStop
index: true
order: 2
category:
  - Guide
---

# OnPlayerPingStop
This event is triggered when player_ping_stop is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPlayerPingStop", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |