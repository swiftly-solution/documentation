---
title: OnRoundTimeWarning
index: true
order: 2
category:
  - Guide
---

# OnRoundTimeWarning
This event is triggered when round_time_warning is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundTimeWarning", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |