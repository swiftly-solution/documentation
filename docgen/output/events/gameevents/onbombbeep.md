---
title: OnBombBeep
index: true
order: 2
category:
  - Guide
---

# OnBombBeep
This event is triggered when bomb_beep is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBombBeep", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |