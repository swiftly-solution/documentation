---
title: OnPlayerTeam
index: true
order: 2
category:
  - Guide
---

# OnPlayerTeam
This event is triggered when player_team is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerTeam", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|   `userid`   |   `int`   |
|    `team`    |   `int`   |
|   `oldteam`  |   `int`   |
| `disconnect` | `boolean` |
|   `silent`   | `boolean` |
|    `isbot`   | `boolean` |
|    `name`    |  `string` |