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
@event returns void
AddEventHandler("OnBombBeginplant", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |