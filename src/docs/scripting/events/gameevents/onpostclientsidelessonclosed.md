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
@event returns void
AddEventHandler("OnPostClientsideLessonClosed", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `lesson_name` |  `string` |