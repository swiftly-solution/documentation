---
title: OnBuymenuOpen
index: true
order: 2
category:
  - Guide
---

# OnBuymenuOpen
This event is triggered when buymenu_open is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBuymenuOpen", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |