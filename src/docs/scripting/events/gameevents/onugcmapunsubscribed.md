---
title: OnUgcMapUnsubscribed
index: true
order: 2
category:
  - Guide
---

# OnUgcMapUnsubscribed
This event is triggered when ugc_map_unsubscribed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnUgcMapUnsubscribed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `published_file_id` |  `uint64` |