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
@event returns void
AddEventHandler("OnPostGameMessage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `target` |   `int`   |
|  `text`  |  `string` |