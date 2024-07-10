---
title: OnUgcMapDownloadError
index: true
order: 2
category:
  - Guide
---

# OnUgcMapDownloadError
This event is triggered when ugc_map_download_error is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnUgcMapDownloadError", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
| `error_code` |   `int`   |