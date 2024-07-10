---
title: OnRoundPrestart
index: true
order: 2
category:
  - Guide
---

# OnRoundPrestart
This event is triggered when sent before all other round restart actions
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundPrestart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |