---
title: OnPlayerChangename
index: true
order: 2
category:
  - Guide
---

# OnPlayerChangename
This event is triggered when player_changename is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPlayerChangename", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `oldname` |  `string` |
| `newname` |  `string` |