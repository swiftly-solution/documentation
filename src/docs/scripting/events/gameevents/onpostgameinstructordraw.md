---
title: OnPostGameinstructorDraw
index: true
order: 2
category:
  - Guide
---

# OnPostGameinstructorDraw
This event is triggered after gameinstructor_draw is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostGameinstructorDraw", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |