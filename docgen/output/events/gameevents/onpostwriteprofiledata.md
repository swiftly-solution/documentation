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
@event returns void
AddEventHandler("OnPostWriteProfileData", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |