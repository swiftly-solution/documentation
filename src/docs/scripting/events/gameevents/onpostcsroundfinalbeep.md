---
title: OnPostCsRoundFinalBeep
index: true
order: 2
category:
  - Guide
---

# OnPostCsRoundFinalBeep
This event is triggered after cs_round_final_beep is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostCsRoundFinalBeep", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |