---
title: OnUserDataDownloaded
index: true
order: 2
category:
  - Guide
---

# OnUserDataDownloaded
This event is triggered when user_data_downloaded is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnUserDataDownloaded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |