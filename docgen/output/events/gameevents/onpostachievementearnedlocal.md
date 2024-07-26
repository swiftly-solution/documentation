---
title: OnPostAchievementEarnedLocal
index: true
order: 2
category:
  - Guide
---

# OnPostAchievementEarnedLocal
This event is triggered after achievement_earned_local is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostAchievementEarnedLocal", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
|    `achievement`    |   `int`   |
| `splitscreenplayer` |   `int`   |