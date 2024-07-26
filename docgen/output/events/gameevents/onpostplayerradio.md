---
title: OnPostPlayerRadio
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerRadio
This event is triggered after player_radio is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerRadio", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `slot`  |   `int`   |