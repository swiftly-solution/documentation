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
@event returns void
AddEventHandler("OnRepostXboxAchievements", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `splitscreenplayer` |   `int`   |