---
title: OnUgcFileDownloadStart
index: true
order: 2
category:
  - Guide
---

# OnUgcFileDownloadStart
This event is triggered when ugc_file_download_start is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnUgcFileDownloadStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |