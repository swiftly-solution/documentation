---
title: OnPostBombBeep
index: true
order: 2
category:
  - Guide
---

# OnPostBombBeep
This event is triggered after bomb_beep is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostBombBeep", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |