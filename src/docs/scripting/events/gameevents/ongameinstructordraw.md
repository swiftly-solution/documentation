---
title: OnGameinstructorDraw
index: true
order: 2
category:
  - Guide
---

# OnGameinstructorDraw
This event is triggered when gameinstructor_draw is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnGameinstructorDraw", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |