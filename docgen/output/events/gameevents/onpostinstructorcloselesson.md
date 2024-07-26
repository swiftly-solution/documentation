---
title: OnPostInstructorCloseLesson
index: true
order: 2
category:
  - Guide
---

# OnPostInstructorCloseLesson
This event is triggered after instructor_close_lesson is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostInstructorCloseLesson", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `userid`  |   `int`   |
| `hint_name` |  `string` |