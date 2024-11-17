---
title: OnCsRoundFinalBeep
index: true
order: 2
category:
  - Guide
---

# OnCsRoundFinalBeep
This event is triggered when cs_round_final_beep is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnCsRoundFinalBeep", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |