---
title: OnJointeamFailed
index: true
order: 2
category:
  - Guide
---

# OnJointeamFailed
This event is triggered when jointeam_failed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnJointeamFailed", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `reason` |   `int`   |