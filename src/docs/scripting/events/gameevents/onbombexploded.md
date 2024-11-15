---
title: OnBombExploded
index: true
order: 2
category:
  - Guide
---

# OnBombExploded
This event is triggered when bomb_exploded is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnBombExploded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |