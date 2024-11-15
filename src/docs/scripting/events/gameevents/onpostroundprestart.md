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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostRoundPrestart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |