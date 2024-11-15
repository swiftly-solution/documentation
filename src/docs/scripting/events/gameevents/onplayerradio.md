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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPlayerRadio", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `slot`  |   `int`   |