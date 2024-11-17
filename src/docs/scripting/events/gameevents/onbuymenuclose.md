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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnBuymenuClose", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |