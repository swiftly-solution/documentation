---
title: OnStartHalftime
index: true
order: 2
category:
  - Guide
---

# OnStartHalftime
This event is triggered when start_halftime is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnStartHalftime", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |