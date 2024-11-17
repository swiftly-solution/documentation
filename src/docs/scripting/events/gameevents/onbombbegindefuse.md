---
title: OnBombBegindefuse
index: true
order: 2
category:
  - Guide
---

# OnBombBegindefuse
This event is triggered when bomb_begindefuse is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnBombBegindefuse", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `haskit` | `boolean` |