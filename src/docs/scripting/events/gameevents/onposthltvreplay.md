---
title: OnPostHltvReplay
index: true
order: 2
category:
  - Guide
---

# OnPostHltvReplay
This event is triggered after hltv_replay is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostHltvReplay", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
|  `delay` |   `int`   |
| `reason` |   `int`   |