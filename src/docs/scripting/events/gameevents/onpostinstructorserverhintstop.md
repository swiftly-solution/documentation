---
title: OnPostInstructorServerHintStop
index: true
order: 2
category:
  - Guide
---

# OnPostInstructorServerHintStop
This event is triggered after instructor_server_hint_stop is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostInstructorServerHintStop", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key       | Data Type |
| :-------------: | :-------: |
|   `hint_name`   |  `string` |
| `hint_entindex` |   `int`   |