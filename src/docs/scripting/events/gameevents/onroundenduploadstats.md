---
title: OnRoundEndUploadStats
index: true
order: 2
category:
  - Guide
---

# OnRoundEndUploadStats
This event is triggered when round_end_upload_stats is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnRoundEndUploadStats", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |