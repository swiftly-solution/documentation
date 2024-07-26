---
title: OnSpecModeUpdated
index: true
order: 2
category:
  - Guide
---

# OnSpecModeUpdated
This event is triggered when spec_mode_updated is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnSpecModeUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |