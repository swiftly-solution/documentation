---
title: OnPlayerRadio
index: true
order: 2
category:
  - Guide
---

# OnPlayerRadio
This event is triggered when player_radio is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerRadio", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `slot`  |   `int`   |