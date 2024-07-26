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
@event returns void
AddEventHandler("OnPostBombBeep", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |