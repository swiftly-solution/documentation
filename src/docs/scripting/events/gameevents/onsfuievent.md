---
title: OnSfuievent
index: true
order: 2
category:
  - Guide
---

# OnSfuievent
This event is triggered when sfuievent is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnSfuievent", function(event)
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