---
title: OnPostRoundPoststart
index: true
order: 2
category:
  - Guide
---

# OnPostRoundPoststart
This event is triggered after round_poststart is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostRoundPoststart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |