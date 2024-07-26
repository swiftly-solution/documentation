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
@event returns void
AddEventHandler("OnPostBombAbortdefuse", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |