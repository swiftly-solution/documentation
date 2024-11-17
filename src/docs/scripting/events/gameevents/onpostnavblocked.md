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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostNavBlocked", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|   `area`  |   `int`   |
| `blocked` | `boolean` |