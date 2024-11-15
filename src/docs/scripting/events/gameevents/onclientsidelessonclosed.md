---
title: OnClientsideLessonClosed
index: true
order: 2
category:
  - Guide
---

# OnClientsideLessonClosed
This event is triggered when clientside_lesson_closed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnClientsideLessonClosed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `lesson_name` |  `string` |