---
title: OnPostSpecTargetUpdated
index: true
order: 2
category:
  - Guide
---

# OnPostSpecTargetUpdated
This event is triggered after spec_target_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostSpecTargetUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |