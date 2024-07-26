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
@event returns void
AddEventHandler("OnPostFinaleStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `rushes` |   `int`   |