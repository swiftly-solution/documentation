---
title: OnTrMarkComplete
index: true
order: 2
category:
  - Guide
---

# OnTrMarkComplete
This event is triggered when tr_mark_complete is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTrMarkComplete", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `complete` |   `int`   |