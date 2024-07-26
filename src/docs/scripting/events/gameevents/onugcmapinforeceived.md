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
@event returns void
AddEventHandler("OnUgcMapInfoReceived", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `published_file_id` |  `uint64` |