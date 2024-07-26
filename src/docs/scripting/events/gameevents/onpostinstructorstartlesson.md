---
title: OnPostInstructorStartLesson
index: true
order: 2
category:
  - Guide
---

# OnPostInstructorStartLesson
This event is triggered after instructor_start_lesson is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostInstructorStartLesson", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|           Key          | Data Type |
| :--------------------: | :-------: |
|        `userid`        |   `int`   |
|       `hint_name`      |  `string` |
|      `hint_target`     |   `int`   |
|   `vr_movement_type`   |   `int`   |
| `vr_single_controller` | `boolean` |
|  `vr_controller_type`  |   `int`   |