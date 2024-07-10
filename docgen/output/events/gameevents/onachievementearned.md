---
title: OnAchievementEarned
index: true
order: 2
category:
  - Guide
---

# OnAchievementEarned
This event is triggered when achievement_earned is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnAchievementEarned", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
|    `player`   |   `int`   |
| `achievement` |   `int`   |