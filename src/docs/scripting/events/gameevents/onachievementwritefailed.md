---
title: OnAchievementWriteFailed
index: true
order: 2
category:
  - Guide
---

# OnAchievementWriteFailed
This event is triggered when achievement_write_failed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnAchievementWriteFailed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |