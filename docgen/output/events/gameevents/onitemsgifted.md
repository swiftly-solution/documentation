---
title: OnItemsGifted
index: true
order: 2
category:
  - Guide
---

# OnItemsGifted
This event is triggered when items_gifted is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnItemsGifted", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `player`  |   `int`   |
|  `itemdef`  |   `int`   |
|  `numgifts` |   `int`   |
|  `giftidx`  |   `int`   |
| `accountid` |   `int`   |