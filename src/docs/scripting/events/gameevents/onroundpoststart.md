---
title: OnRoundPoststart
index: true
order: 2
category:
  - Guide
---

# OnRoundPoststart
This event is triggered when round_poststart is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnRoundPoststart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |