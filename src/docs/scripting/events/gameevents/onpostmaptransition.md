---
title: OnPostMapTransition
index: true
order: 2
category:
  - Guide
---

# OnPostMapTransition
This event is triggered after map_transition is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostMapTransition", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |