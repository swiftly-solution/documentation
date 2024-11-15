---
title: OnUgcMapInfoReceived
index: true
order: 2
category:
  - Guide
---

# OnUgcMapInfoReceived
This event is triggered when ugc_map_info_received is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnUgcMapInfoReceived", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `published_file_id` |  `uint64` |