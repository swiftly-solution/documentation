---
title: OnPostClientsideLessonClosed
index: true
order: 2
category:
  - Guide
---

# OnPostClientsideLessonClosed
This event is triggered after clientside_lesson_closed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostClientsideLessonClosed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `lesson_name` |  `string` |