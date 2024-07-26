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
@event returns void
AddEventHandler("OnRoundPoststart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |