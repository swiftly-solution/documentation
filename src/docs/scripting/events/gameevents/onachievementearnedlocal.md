---
title: OnAchievementEarnedLocal
index: true
order: 2
category:
  - Guide
---

# OnAchievementEarnedLocal
This event is triggered when achievement_earned_local is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnAchievementEarnedLocal", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
|    `achievement`    |   `int`   |
| `splitscreenplayer` |   `int`   |