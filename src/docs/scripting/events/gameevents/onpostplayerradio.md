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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerRadio", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `slot`  |   `int`   |