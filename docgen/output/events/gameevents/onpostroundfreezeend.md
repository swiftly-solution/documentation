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
@event returns void
AddEventHandler("OnPostRoundFreezeEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |