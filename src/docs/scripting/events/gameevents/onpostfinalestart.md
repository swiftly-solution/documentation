---
title: OnPostFinaleStart
index: true
order: 2
category:
  - Guide
---

# OnPostFinaleStart
This event is triggered after finale_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostFinaleStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `rushes` |   `int`   |