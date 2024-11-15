---
title: OnPostUgcFileDownloadStart
index: true
order: 2
category:
  - Guide
---

# OnPostUgcFileDownloadStart
This event is triggered after ugc_file_download_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostUgcFileDownloadStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
|      `hcontent`     |  `uint64` |
| `published_file_id` |  `uint64` |