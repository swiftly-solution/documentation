---
title: OnPostSetInstructorGroupEnabled
index: true
order: 2
category:
  - Guide
---

# OnPostSetInstructorGroupEnabled
This event is triggered after set_instructor_group_enabled is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostSetInstructorGroupEnabled", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `group`  |  `string` |
| `enabled` |   `int`   |