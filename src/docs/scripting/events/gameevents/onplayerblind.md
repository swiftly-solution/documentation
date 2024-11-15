---
title: OnPlayerBlind
index: true
order: 2
category:
  - Guide
---

# OnPlayerBlind
This event is triggered when player_blind is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPlayerBlind", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|        Key       | Data Type |
| :--------------: | :-------: |
|     `userid`     |   `int`   |
|    `attacker`    |   `int`   |
|    `entityid`    |   `int`   |
| `blind_duration` |  `float`  |