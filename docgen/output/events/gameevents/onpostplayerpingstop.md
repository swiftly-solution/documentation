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
@event returns void
AddEventHandler("OnPostPlayerPingStop", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |