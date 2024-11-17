---
title: OnUgcFileDownloadStart
index: true
order: 2
category:
  - Guide
---

# OnUgcFileDownloadStart
This event is triggered when ugc_file_download_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnUgcFileDownloadStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
|      `hcontent`     |  `uint64` |
| `published_file_id` |  `uint64` |