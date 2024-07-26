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
@event returns void
AddEventHandler("OnPostUserDataDownloaded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |