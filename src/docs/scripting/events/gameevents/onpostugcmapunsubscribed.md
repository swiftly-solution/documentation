---
title: OnPostUgcMapUnsubscribed
index: true
order: 2
category:
  - Guide
---

# OnPostUgcMapUnsubscribed
This event is triggered after ugc_map_unsubscribed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostUgcMapUnsubscribed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `published_file_id` |  `uint64` |