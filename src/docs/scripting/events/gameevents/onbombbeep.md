---
title: OnBombBeep
index: true
order: 2
category:
  - Guide
---

# OnBombBeep
This event is triggered when bomb_beep is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnBombBeep", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |