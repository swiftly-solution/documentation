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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostAchievementEarnedLocal", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
|    `achievement`    |   `int`   |
| `splitscreenplayer` |   `int`   |