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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostBuymenuClose", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |