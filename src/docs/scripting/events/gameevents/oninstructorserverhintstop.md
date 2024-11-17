---
title: OnInstructorServerHintStop
index: true
order: 2
category:
  - Guide
---

# OnInstructorServerHintStop
This event is triggered when instructor_server_hint_stop is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnInstructorServerHintStop", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key       | Data Type |
| :-------------: | :-------: |
|   `hint_name`   |  `string` |
| `hint_entindex` |   `int`   |