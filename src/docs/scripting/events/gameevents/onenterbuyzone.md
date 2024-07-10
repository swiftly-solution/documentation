---
title: OnEnterBuyzone
index: true
order: 2
category:
  - Guide
---

# OnEnterBuyzone
This event is triggered when enter_buyzone is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnEnterBuyzone", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `canbuy` | `boolean` |