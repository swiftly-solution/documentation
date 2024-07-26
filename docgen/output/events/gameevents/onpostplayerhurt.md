---
title: OnPostPlayerHurt
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerHurt
This event is triggered after player_hurt is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerHurt", function(event --[[ Event ]])
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