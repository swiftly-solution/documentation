---
title: OnPostEnterBombzone
index: true
order: 2
category:
  - Guide
---

# OnPostEnterBombzone
This event is triggered after enter_bombzone is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostEnterBombzone", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `userid`  |   `int`   |
|  `hasbomb`  | `boolean` |
| `isplanted` | `boolean` |