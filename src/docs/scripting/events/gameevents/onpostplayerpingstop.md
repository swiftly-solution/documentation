---
title: OnPostPlayerPingStop
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerPingStop
This event is triggered after player_ping_stop is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPlayerPingStop", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |