---
title: OnRoundStartPreEntity
index: true
order: 2
category:
  - Guide
---

# OnRoundStartPreEntity
This event is triggered when round_start_pre_entity is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnRoundStartPreEntity", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |