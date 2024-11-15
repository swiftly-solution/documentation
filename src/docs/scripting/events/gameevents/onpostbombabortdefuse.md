---
title: OnPostBombAbortdefuse
index: true
order: 2
category:
  - Guide
---

# OnPostBombAbortdefuse
This event is triggered after bomb_abortdefuse is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostBombAbortdefuse", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |