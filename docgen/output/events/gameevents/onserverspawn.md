---
title: OnServerSpawn
index: true
order: 2
category:
  - Guide
---

# OnServerSpawn
This event is triggered when send once a server starts
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnServerSpawn", function(event --[[ Event ]])
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