---
title: OnNavBlocked
index: true
order: 2
category:
  - Guide
---

# OnNavBlocked
This event is triggered when nav_blocked is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnNavBlocked", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|   `area`  |   `int`   |
| `blocked` | `boolean` |