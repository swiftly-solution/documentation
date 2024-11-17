---
title: OnEnterBuyzone
index: true
order: 2
category:
  - Guide
---

# OnEnterBuyzone
This event is triggered when enter_buyzone is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnEnterBuyzone", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `canbuy` | `boolean` |