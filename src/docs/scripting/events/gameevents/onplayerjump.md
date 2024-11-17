---
title: OnPlayerJump
index: true
order: 2
category:
  - Guide
---

# OnPlayerJump
This event is triggered when player_jump is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerJump", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |