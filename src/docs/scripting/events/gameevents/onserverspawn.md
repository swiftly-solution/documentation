---
title: OnServerSpawn
index: true
order: 2
category:
  - Guide
---

# OnServerSpawn
This event is triggered when server_spawn is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnServerSpawn", function(event)
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