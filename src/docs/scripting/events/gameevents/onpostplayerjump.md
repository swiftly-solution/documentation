---
title: OnPostPlayerJump
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerJump
This event is triggered after player_jump is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerJump", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |