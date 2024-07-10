---
title: OnInstructorServerHintStop
index: true
order: 2
category:
  - Guide
---

# OnInstructorServerHintStop
This event is triggered when destroys a server/map created hint
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnInstructorServerHintStop", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
| `hint_name` |  `string` |