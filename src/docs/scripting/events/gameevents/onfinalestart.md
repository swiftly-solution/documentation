---
title: OnFinaleStart
index: true
order: 2
category:
  - Guide
---

# OnFinaleStart
This event is triggered when finale_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnFinaleStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `rushes` |   `int`   |