---
title: OnExitBuyzone
index: true
order: 2
category:
  - Guide
---

# OnExitBuyzone
This event is triggered when exit_buyzone is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnExitBuyzone", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `canbuy` | `boolean` |