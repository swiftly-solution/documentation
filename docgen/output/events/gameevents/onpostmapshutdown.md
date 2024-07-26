---
title: OnPostMapShutdown
index: true
order: 2
category:
  - Guide
---

# OnPostMapShutdown
This event is triggered after map_shutdown is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostMapShutdown", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |