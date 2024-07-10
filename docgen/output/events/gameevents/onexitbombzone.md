---
title: OnExitBombzone
index: true
order: 2
category:
  - Guide
---

# OnExitBombzone
This event is triggered when exit_bombzone is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnExitBombzone", function(event --[[ Event ]])
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