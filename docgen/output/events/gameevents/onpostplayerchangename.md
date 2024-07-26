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
@event returns void
AddEventHandler("OnPostPlayerChangename", function(event --[[ Event ]])
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