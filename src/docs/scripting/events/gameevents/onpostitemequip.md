---
title: OnPostItemEquip
index: true
order: 2
category:
  - Guide
---

# OnPostItemEquip
This event is triggered after item_equip is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostItemEquip", function(event)
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