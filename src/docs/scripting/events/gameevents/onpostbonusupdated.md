---
title: OnPostBonusUpdated
index: true
order: 2
category:
  - Guide
---

# OnPostBonusUpdated
This event is triggered after bonus_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostBonusUpdated", function(event)
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