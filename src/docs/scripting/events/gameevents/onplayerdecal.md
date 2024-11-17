---
title: OnPlayerDecal
index: true
order: 2
category:
  - Guide
---

# OnPlayerDecal
This event is triggered when player_decal is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerDecal", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |