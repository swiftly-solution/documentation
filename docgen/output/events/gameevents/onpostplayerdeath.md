---
title: OnPostPlayerDeath
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerDeath
This event is triggered after player_death is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerDeath", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `attacker` |   `int`   |