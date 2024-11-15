---
title: OnPostWriteProfileData
index: true
order: 2
category:
  - Guide
---

# OnPostWriteProfileData
This event is triggered after write_profile_data is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostWriteProfileData", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |