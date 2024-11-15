---
title: OnRagdollDissolved
index: true
order: 2
category:
  - Guide
---

# OnRagdollDissolved
This event is triggered when ragdoll_dissolved is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnRagdollDissolved", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |