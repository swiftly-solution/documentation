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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerTeam", function(event)
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