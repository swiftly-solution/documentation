---
title: OnPostSfuievent
index: true
order: 2
category:
  - Guide
---

# OnPostSfuievent
This event is triggered after sfuievent is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostSfuievent", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `action` |  `string` |
|  `data`  |  `string` |
|  `slot`  |   `int`   |