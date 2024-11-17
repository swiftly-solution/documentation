---
title: OnPostBombBegindefuse
index: true
order: 2
category:
  - Guide
---

# OnPostBombBegindefuse
This event is triggered after bomb_begindefuse is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostBombBegindefuse", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `haskit` | `boolean` |