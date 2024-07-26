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
@event returns void
AddEventHandler("OnRoundPrestart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |