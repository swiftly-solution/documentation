---
title: OnHltvReplay
index: true
order: 2
category:
  - Guide
---

# OnHltvReplay
This event is triggered when hltv_replay is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHltvReplay", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
|  `delay` |   `int`   |
| `reason` |   `int`   |