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
@event returns void
AddEventHandler("OnPostHltvReplay", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
|  `delay` |   `int`   |
| `reason` |   `int`   |