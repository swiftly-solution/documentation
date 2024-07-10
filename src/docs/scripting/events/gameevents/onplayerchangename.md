---
title: OnPlayerChangename
index: true
order: 2
category:
  - Guide
---

# OnPlayerChangename
This event is triggered when player_changename is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerChangename", function(event --[[ Event ]])
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