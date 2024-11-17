---
title: OnGuardianWaveRestart
index: true
order: 2
category:
  - Guide
---

# OnGuardianWaveRestart
This event is triggered when guardian_wave_restart is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnGuardianWaveRestart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |