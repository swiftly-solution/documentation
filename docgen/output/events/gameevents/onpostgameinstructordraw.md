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
@event returns void
AddEventHandler("OnPostGameinstructorDraw", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |