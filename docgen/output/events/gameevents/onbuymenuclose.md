---
title: OnBuymenuClose
index: true
order: 2
category:
  - Guide
---

# OnBuymenuClose
This event is triggered when buymenu_close is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBuymenuClose", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |