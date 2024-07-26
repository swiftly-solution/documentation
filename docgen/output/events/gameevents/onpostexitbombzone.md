---
title: OnPostExitBombzone
index: true
order: 2
category:
  - Guide
---

# OnPostExitBombzone
This event is triggered after exit_bombzone is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostExitBombzone", function(event --[[ Event ]])
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