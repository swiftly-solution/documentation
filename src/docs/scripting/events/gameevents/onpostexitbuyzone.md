---
title: OnPostExitBuyzone
index: true
order: 2
category:
  - Guide
---

# OnPostExitBuyzone
This event is triggered after exit_buyzone is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostExitBuyzone", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `canbuy` | `boolean` |