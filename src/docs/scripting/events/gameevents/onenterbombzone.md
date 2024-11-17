---
title: OnEnterBombzone
index: true
order: 2
category:
  - Guide
---

# OnEnterBombzone
This event is triggered when enter_bombzone is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnEnterBombzone", function(event)
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