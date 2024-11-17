---
title: OnPostDemoStop
index: true
order: 2
category:
  - Guide
---

# OnPostDemoStop
This event is triggered after demo_stop is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostDemoStop", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |