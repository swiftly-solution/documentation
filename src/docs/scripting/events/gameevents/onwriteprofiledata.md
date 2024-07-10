---
title: OnWriteProfileData
index: true
order: 2
category:
  - Guide
---

# OnWriteProfileData
This event is triggered when write_profile_data is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnWriteProfileData", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |