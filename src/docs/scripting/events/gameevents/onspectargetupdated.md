---
title: OnSpecTargetUpdated
index: true
order: 2
category:
  - Guide
---

# OnSpecTargetUpdated
This event is triggered when spec_target_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnSpecTargetUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |