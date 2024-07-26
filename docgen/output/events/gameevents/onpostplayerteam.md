---
title: OnPostPlayerTeam
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerTeam
This event is triggered after player_team is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerTeam", function(event --[[ Event ]])
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
|    `name`    |  `string` |
|    `isbot`   | `boolean` |