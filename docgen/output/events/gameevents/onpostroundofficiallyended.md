---
title: OnPostRoundOfficiallyEnded
index: true
order: 2
category:
  - Guide
---

# OnPostRoundOfficiallyEnded
This event is triggered after round_officially_ended is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostRoundOfficiallyEnded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |