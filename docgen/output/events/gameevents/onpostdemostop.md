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
@event returns void
AddEventHandler("OnPostDemoStop", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |