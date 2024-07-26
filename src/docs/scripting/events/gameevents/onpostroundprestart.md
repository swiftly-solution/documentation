---
title: OnPostRoundPrestart
index: true
order: 2
category:
  - Guide
---

# OnPostRoundPrestart
This event is triggered after round_prestart is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostRoundPrestart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |