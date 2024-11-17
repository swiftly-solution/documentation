---
title: OnDemoStop
index: true
order: 2
category:
  - Guide
---

# OnDemoStop
This event is triggered when demo_stop is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnDemoStop", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |