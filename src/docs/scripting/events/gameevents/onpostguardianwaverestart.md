---
title: OnPostGuardianWaveRestart
index: true
order: 2
category:
  - Guide
---

# OnPostGuardianWaveRestart
This event is triggered after guardian_wave_restart is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostGuardianWaveRestart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |