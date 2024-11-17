---
title: OnPostUserDataDownloaded
index: true
order: 2
category:
  - Guide
---

# OnPostUserDataDownloaded
This event is triggered after user_data_downloaded is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostUserDataDownloaded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |