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
@event returns void
AddEventHandler("OnPostRagdollDissolved", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |