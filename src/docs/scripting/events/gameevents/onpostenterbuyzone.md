---
title: OnPostEnterBuyzone
index: true
order: 2
category:
  - Guide
---

# OnPostEnterBuyzone
This event is triggered after enter_buyzone is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostEnterBuyzone", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `canbuy` | `boolean` |