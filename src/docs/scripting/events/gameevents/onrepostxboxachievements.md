---
title: OnRepostXboxAchievements
index: true
order: 2
category:
  - Guide
---

# OnRepostXboxAchievements
This event is triggered when repost_xbox_achievements is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnRepostXboxAchievements", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `splitscreenplayer` |   `int`   |