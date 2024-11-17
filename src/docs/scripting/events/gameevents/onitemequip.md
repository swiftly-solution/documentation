---
title: OnItemEquip
index: true
order: 2
category:
  - Guide
---

# OnItemEquip
This event is triggered when item_equip is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnItemEquip", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
|    `userid`   |   `int`   |
|     `item`    |  `string` |
|   `defindex`  |   `int`   |
|   `canzoom`   | `boolean` |
| `hassilencer` | `boolean` |
|  `issilenced` | `boolean` |
|  `hastracers` | `boolean` |
|   `weptype`   |   `int`   |
|  `ispainted`  | `boolean` |