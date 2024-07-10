---
title: OnSpecTargetUpdated
index: true
order: 2
category:
  - Guide
---

# OnSpecTargetUpdated
This event is triggered when spec_target_updated is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnSpecTargetUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `target` |   `int`   |