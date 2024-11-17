---
title: OnGameNewmap
index: true
order: 2
category:
  - Guide
---

# OnGameNewmap
This event is triggered when game_newmap is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnGameNewmap", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|   `mapname`  |  `string` |
| `transition` | `boolean` |