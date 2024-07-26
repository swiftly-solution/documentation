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
@event returns void
AddEventHandler("OnPostSpecModeUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |