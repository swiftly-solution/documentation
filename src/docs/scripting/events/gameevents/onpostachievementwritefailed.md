---
title: OnPostAchievementWriteFailed
index: true
order: 2
category:
  - Guide
---

# OnPostAchievementWriteFailed
This event is triggered after achievement_write_failed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostAchievementWriteFailed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |