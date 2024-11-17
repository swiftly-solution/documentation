---
title: OnPostSpecModeUpdated
index: true
order: 2
category:
  - Guide
---

# OnPostSpecModeUpdated
This event is triggered after spec_mode_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostSpecModeUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |