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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostRepostXboxAchievements", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `splitscreenplayer` |   `int`   |