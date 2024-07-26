---
title: OnPlayerHurt
index: true
order: 2
category:
  - Guide
---

# OnPlayerHurt
This event is triggered when player_hurt is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerHurt", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `attacker` |   `int`   |
|  `health`  |   `int`   |