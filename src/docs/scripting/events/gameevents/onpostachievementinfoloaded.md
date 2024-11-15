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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostAchievementInfoLoaded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |