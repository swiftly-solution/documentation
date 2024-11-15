---
title: OnPostRoundFreezeEnd
index: true
order: 2
category:
  - Guide
---

# OnPostRoundFreezeEnd
This event is triggered after round_freeze_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostRoundFreezeEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |