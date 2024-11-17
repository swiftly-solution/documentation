---
title: OnPostPlayerChangename
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerChangename
This event is triggered after player_changename is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerChangename", function(event)
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