---
title: OnPostUgcMapInfoReceived
index: true
order: 2
category:
  - Guide
---

# OnPostUgcMapInfoReceived
This event is triggered after ugc_map_info_received is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostUgcMapInfoReceived", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `published_file_id` |  `uint64` |