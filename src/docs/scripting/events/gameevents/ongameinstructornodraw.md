---
title: OnGameinstructorNodraw
index: true
order: 2
category:
  - Guide
---

# OnGameinstructorNodraw
This event is triggered when gameinstructor_nodraw is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnGameinstructorNodraw", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |