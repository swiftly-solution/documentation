---
title: OnPlayerFootstep
index: true
order: 2
category:
  - Guide
---

# OnPlayerFootstep
This event is triggered when player_footstep is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerFootstep", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |