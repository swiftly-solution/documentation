---
title: OnSmokeBeaconParadrop
index: true
order: 2
category:
  - Guide
---

# OnSmokeBeaconParadrop
This event is triggered when smoke_beacon_paradrop is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnSmokeBeaconParadrop", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `paradrop` |   `int`   |