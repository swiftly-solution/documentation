---
title: OnTrMarkBestTime
index: true
order: 2
category:
  - Guide
---

# OnTrMarkBestTime
This event is triggered when tr_mark_best_time is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTrMarkBestTime", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `time` |   `int`   |