---
title: OnPostBuymenuClose
index: true
order: 2
category:
  - Guide
---

# OnPostBuymenuClose
This event is triggered after buymenu_close is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostBuymenuClose", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |