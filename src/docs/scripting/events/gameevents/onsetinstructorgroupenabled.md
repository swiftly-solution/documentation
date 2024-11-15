---
title: OnSetInstructorGroupEnabled
index: true
order: 2
category:
  - Guide
---

# OnSetInstructorGroupEnabled
This event is triggered when set_instructor_group_enabled is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnSetInstructorGroupEnabled", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `group`  |  `string` |
| `enabled` |   `int`   |