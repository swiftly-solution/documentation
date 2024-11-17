---
title: OnPostAchievementEvent
index: true
order: 2
category:
  - Guide
---

# OnPostAchievementEvent
This event is triggered after achievement_event is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostAchievementEvent", function(event)
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