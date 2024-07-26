---
title: OnPostPlayerBlind
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerBlind
This event is triggered after player_blind is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerBlind", function(event --[[ Event ]])
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