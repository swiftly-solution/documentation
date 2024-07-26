---
title: OnBonusUpdated
index: true
order: 2
category:
  - Guide
---

# OnBonusUpdated
This event is triggered when bonus_updated is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBonusUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `numadvanced` |   `int`   |
|  `numbronze`  |   `int`   |
|  `numsilver`  |   `int`   |
|   `numgold`   |   `int`   |