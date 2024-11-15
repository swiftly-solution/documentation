---
title: OnPostUgcMapDownloadError
index: true
order: 2
category:
  - Guide
---

# OnPostUgcMapDownloadError
This event is triggered after ugc_map_download_error is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostUgcMapDownloadError", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `published_file_id` |  `uint64` |
|     `error_code`    |   `int`   |