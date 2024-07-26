---
title: OnBombDropped
index: true
order: 2
category:
  - Guide
---

# OnBombDropped
This event is triggered when bomb_dropped is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBombDropped", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entindex` |   `int`   |