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
@event returns void
AddEventHandler("OnRoundStartPreEntity", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |