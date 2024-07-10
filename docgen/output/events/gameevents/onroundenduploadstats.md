---
title: OnRoundEndUploadStats
index: true
order: 2
category:
  - Guide
---

# OnRoundEndUploadStats
This event is triggered when round_end_upload_stats is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundEndUploadStats", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |