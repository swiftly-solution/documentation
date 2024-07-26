---
title: OnRoundFreezeEnd
index: true
order: 2
category:
  - Guide
---

# OnRoundFreezeEnd
This event is triggered when round_freeze_end is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundFreezeEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |