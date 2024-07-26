---
title: OnPostCsRoundStartBeep
index: true
order: 2
category:
  - Guide
---

# OnPostCsRoundStartBeep
This event is triggered after cs_round_start_beep is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostCsRoundStartBeep", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |