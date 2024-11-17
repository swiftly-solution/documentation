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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnSpecModeUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |