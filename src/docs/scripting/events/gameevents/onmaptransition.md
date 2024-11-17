---
title: OnMapTransition
index: true
order: 2
category:
  - Guide
---

# OnMapTransition
This event is triggered when map_transition is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnMapTransition", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |