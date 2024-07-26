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
@event returns void
AddEventHandler("OnDemoStop", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |