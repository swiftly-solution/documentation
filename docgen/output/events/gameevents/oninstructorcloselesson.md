---
title: OnInstructorCloseLesson
index: true
order: 2
category:
  - Guide
---

# OnInstructorCloseLesson
This event is triggered when instructor_close_lesson is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnInstructorCloseLesson", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `userid`  |   `int`   |
| `hint_name` |  `string` |