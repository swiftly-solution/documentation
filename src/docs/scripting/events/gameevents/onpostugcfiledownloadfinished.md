---
title: OnPostUgcFileDownloadFinished
index: true
order: 2
category:
  - Guide
---

# OnPostUgcFileDownloadFinished
This event is triggered after ugc_file_download_finished is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostUgcFileDownloadFinished", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `hcontent` |  `uint64` |