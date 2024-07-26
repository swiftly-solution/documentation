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
@event returns void
AddEventHandler("OnPostGuardianWaveRestart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |