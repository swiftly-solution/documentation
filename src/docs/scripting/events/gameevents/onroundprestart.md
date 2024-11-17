---
title: OnRoundPrestart
index: true
order: 2
category:
  - Guide
---

# OnRoundPrestart
This event is triggered when round_prestart is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnRoundPrestart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |