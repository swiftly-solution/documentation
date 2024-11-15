---
title: OnPostJointeamFailed
index: true
order: 2
category:
  - Guide
---

# OnPostJointeamFailed
This event is triggered after jointeam_failed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostJointeamFailed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `reason` |   `int`   |