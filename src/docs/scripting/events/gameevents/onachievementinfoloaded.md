---
title: OnAchievementInfoLoaded
index: true
order: 2
category:
  - Guide
---

# OnAchievementInfoLoaded
This event is triggered when achievement_info_loaded is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnAchievementInfoLoaded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |