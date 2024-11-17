---
title: OnBombBeginplant
index: true
order: 2
category:
  - Guide
---

# OnBombBeginplant
This event is triggered when bomb_beginplant is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnBombBeginplant", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |