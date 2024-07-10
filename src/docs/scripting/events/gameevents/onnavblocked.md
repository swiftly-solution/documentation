---
title: OnNavBlocked
index: true
order: 2
category:
  - Guide
---

# OnNavBlocked
This event is triggered when nav_blocked is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnNavBlocked", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|   `area`  |   `int`   |
| `blocked` | `boolean` |