---
title: OnBombExploded
index: true
order: 2
category:
  - Guide
---

# OnBombExploded
This event is triggered when bomb_exploded is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBombExploded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |