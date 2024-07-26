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
@event returns void
AddEventHandler("OnSetInstructorGroupEnabled", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `group`  |  `string` |
| `enabled` |   `int`   |