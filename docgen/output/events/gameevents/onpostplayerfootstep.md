---
title: OnPostPlayerFootstep
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerFootstep
This event is triggered after player_footstep is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerFootstep", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |