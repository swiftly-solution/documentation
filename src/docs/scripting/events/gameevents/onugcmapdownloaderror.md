---
title: OnUgcMapDownloadError
index: true
order: 2
category:
  - Guide
---

# OnUgcMapDownloadError
This event is triggered when ugc_map_download_error is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnUgcMapDownloadError", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `published_file_id` |  `uint64` |
|     `error_code`    |   `int`   |