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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnRoundFreezeEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |