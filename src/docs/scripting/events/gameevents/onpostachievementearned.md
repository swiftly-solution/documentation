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
@event returns void
AddEventHandler("OnPostAchievementEarned", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
|    `player`   |   `int`   |
| `achievement` |   `int`   |