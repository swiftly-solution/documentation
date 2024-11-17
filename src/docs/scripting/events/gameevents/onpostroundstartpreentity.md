---
title: OnPostRoundStartPreEntity
index: true
order: 2
category:
  - Guide
---

# OnPostRoundStartPreEntity
This event is triggered after round_start_pre_entity is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostRoundStartPreEntity", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |