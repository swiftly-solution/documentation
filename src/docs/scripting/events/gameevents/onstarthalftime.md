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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnStartHalftime", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |