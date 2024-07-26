---
title: OnCsRoundStartBeep
index: true
order: 2
category:
  - Guide
---

# OnCsRoundStartBeep
This event is triggered when cs_round_start_beep is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnCsRoundStartBeep", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |