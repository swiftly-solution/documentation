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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostInstructorServerHintStop", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key       | Data Type |
| :-------------: | :-------: |
|   `hint_name`   |  `string` |
| `hint_entindex` |   `int`   |