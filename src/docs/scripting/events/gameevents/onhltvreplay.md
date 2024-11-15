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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHltvReplay", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
|  `delay` |   `int`   |
| `reason` |   `int`   |