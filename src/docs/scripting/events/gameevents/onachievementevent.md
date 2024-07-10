---
title: OnAchievementEvent
index: true
order: 2
category:
  - Guide
---

# OnAchievementEvent
This event is triggered when achievement_event is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnAchievementEvent", function(event --[[ Event ]])
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