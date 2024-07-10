---
title: OnAchievementWriteFailed
index: true
order: 2
category:
  - Guide
---

# OnAchievementWriteFailed
This event is triggered when Used for a notification message when an achievement fails to write
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