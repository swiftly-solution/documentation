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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnJointeamFailed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `reason` |   `int`   |