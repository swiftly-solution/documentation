---
title: OnEnterBombzone
index: true
order: 2
category:
  - Guide
---

# OnEnterBombzone
This event is triggered when enter_bombzone is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnEnterBombzone", function(event --[[ Event ]])
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