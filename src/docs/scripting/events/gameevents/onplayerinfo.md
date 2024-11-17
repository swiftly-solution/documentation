---
title: OnPlayerInfo
index: true
order: 2
category:
  - Guide
---

# OnPlayerInfo
This event is triggered when player_info is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerInfo", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|   `name`  |  `string` |
|  `userid` |   `int`   |
| `steamid` |  `uint64` |
|   `bot`   | `boolean` |