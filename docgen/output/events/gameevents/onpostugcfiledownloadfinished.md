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
@event returns void
AddEventHandler("OnPostUgcFileDownloadFinished", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `hcontent` |  `uint64` |