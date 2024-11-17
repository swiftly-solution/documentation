---
title: OnPostGameinstructorNodraw
index: true
order: 2
category:
  - Guide
---

# OnPostGameinstructorNodraw
This event is triggered after gameinstructor_nodraw is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostGameinstructorNodraw", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |