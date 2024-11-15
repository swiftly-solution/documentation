---
title: OnPostRagdollDissolved
index: true
order: 2
category:
  - Guide
---

# OnPostRagdollDissolved
This event is triggered after ragdoll_dissolved is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostRagdollDissolved", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |