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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnGameinstructorNodraw", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |