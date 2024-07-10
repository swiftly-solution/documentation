---
title: OnRagdollDissolved
index: true
order: 2
category:
  - Guide
---

# OnRagdollDissolved
This event is triggered when ragdoll_dissolved is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRagdollDissolved", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |