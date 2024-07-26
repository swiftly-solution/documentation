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
@event returns void
AddEventHandler("OnPostCsRoundFinalBeep", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |