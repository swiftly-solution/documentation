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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostSfuievent", function(event)
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