---
title: OnWriteProfileData
index: true
order: 2
category:
  - Guide
---

# OnWriteProfileData
This event is triggered when write_profile_data is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnWriteProfileData", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |