---
title: OnPostRoundEndUploadStats
index: true
order: 2
category:
  - Guide
---

# OnPostRoundEndUploadStats
This event is triggered after round_end_upload_stats is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostRoundEndUploadStats", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |