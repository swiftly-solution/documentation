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
@event returns void
AddEventHandler("OnGameinstructorDraw", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |