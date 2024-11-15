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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnBonusUpdated", function(event)
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