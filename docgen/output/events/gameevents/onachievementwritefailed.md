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
@event returns void
AddEventHandler("OnAchievementWriteFailed", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |