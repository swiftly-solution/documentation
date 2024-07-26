---
title: OnPostNavBlocked
index: true
order: 2
category:
  - Guide
---

# OnPostNavBlocked
This event is triggered after nav_blocked is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostNavBlocked", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|   `area`  |   `int`   |
| `blocked` | `boolean` |