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
@event returns void
AddEventHandler("OnPostUgcMapUnsubscribed", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `published_file_id` |  `uint64` |