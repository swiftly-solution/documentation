---
title: OnPostGameMessage
index: true
order: 2
category:
  - Guide
---

# OnPostGameMessage
This event is triggered after game_message is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostGameMessage", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `target` |   `int`   |
|  `text`  |  `string` |