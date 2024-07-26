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
@event returns void
AddEventHandler("OnPostAchievementWriteFailed", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |