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
@event returns void
AddEventHandler("OnPostItemEquip", function(event --[[ Event ]])
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