---
title: OnPostAchievementEarned
index: true
order: 2
category:
  - Guide
---

# OnPostAchievementEarned
This event is triggered after achievement_earned is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostAchievementEarned", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
|    `player`   |   `int`   |
| `achievement` |   `int`   |