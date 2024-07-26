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
@event returns void
AddEventHandler("OnPostPlayerJump", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |