---
title: OnPostRepostXboxAchievements
index: true
order: 2
category:
  - Guide
---

# OnPostRepostXboxAchievements
This event is triggered after repost_xbox_achievements is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostRepostXboxAchievements", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `splitscreenplayer` |   `int`   |