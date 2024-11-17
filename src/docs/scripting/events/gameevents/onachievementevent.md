---
title: OnAchievementEvent
index: true
order: 2
category:
  - Guide
---

# OnAchievementEvent
This event is triggered when achievement_event is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnAchievementEvent", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key        | Data Type |
| :----------------: | :-------: |
| `achievement_name` |  `string` |
|      `cur_val`     |   `int`   |
|      `max_val`     |   `int`   |