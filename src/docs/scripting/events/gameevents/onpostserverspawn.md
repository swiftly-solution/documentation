---
title: OnPostServerSpawn
index: true
order: 2
category:
  - Guide
---

# OnPostServerSpawn
This event is triggered after server_spawn is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostServerSpawn", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|  `hostname`  |  `string` |
|   `address`  |  `string` |
|    `port`    |   `int`   |
|    `game`    |  `string` |
|   `mapname`  |  `string` |
|  `addonname` |  `string` |
| `maxplayers` |   `int`   |
|     `os`     |  `string` |
|  `dedicated` | `boolean` |
|  `password`  | `boolean` |