---
title: OnRoundOfficiallyEnded
index: true
order: 2
category:
  - Guide
---

# OnRoundOfficiallyEnded
This event is triggered when round_officially_ended is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundOfficiallyEnded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |