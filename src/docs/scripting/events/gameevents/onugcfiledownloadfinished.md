---
title: OnUgcFileDownloadFinished
index: true
order: 2
category:
  - Guide
---

# OnUgcFileDownloadFinished
This event is triggered when ugc_file_download_finished is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnUgcFileDownloadFinished", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `hcontent` |  `uint64` |