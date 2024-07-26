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
@event returns void
AddEventHandler("OnPostGameinstructorNodraw", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |