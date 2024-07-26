---
title: OnPlayerDeath
index: true
order: 2
category:
  - Guide
---

# OnPlayerDeath
This event is triggered when player_death is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerDeath", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `attacker` |   `int`   |