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
@event returns void
AddEventHandler("OnGuardianWaveRestart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |