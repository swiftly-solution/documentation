---
title: OnPostAchievementInfoLoaded
index: true
order: 2
category:
  - Guide
---

# OnPostAchievementInfoLoaded
This event is triggered after achievement_info_loaded is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostAchievementInfoLoaded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |