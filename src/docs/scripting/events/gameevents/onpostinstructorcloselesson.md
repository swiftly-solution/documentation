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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostInstructorCloseLesson", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `userid`  |   `int`   |
| `hint_name` |  `string` |