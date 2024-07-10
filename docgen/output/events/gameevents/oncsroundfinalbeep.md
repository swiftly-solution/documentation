---
title: OnCsRoundFinalBeep
index: true
order: 2
category:
  - Guide
---

# OnCsRoundFinalBeep
This event is triggered when cs_round_final_beep is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnCsRoundFinalBeep", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |