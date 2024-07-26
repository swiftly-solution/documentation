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
@event returns void
AddEventHandler("OnPostServerSpawn", function(event --[[ Event ]])
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