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
@event returns void
AddEventHandler("OnAchievementInfoLoaded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |