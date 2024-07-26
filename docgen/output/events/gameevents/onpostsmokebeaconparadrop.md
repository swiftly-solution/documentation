---
title: OnPostSmokeBeaconParadrop
index: true
order: 2
category:
  - Guide
---

# OnPostSmokeBeaconParadrop
This event is triggered after smoke_beacon_paradrop is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostSmokeBeaconParadrop", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `paradrop` |   `int`   |