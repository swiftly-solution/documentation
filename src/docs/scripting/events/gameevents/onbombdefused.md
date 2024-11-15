---
title: OnBombDefused
index: true
order: 2
category:
  - Guide
---

# OnBombDefused
This event is triggered when bomb_defused is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnBombDefused", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |