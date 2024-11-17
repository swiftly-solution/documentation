---
title: OnPostStartHalftime
index: true
order: 2
category:
  - Guide
---

# OnPostStartHalftime
This event is triggered after start_halftime is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostStartHalftime", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |