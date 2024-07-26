---
title: OnPostRoundTimeWarning
index: true
order: 2
category:
  - Guide
---

# OnPostRoundTimeWarning
This event is triggered after round_time_warning is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostRoundTimeWarning", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |