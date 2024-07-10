---
title: OnFinaleStart
index: true
order: 2
category:
  - Guide
---

# OnFinaleStart
This event is triggered when finale_start is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnFinaleStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `rushes` |   `int`   |