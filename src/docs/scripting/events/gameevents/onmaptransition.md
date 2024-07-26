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
@event returns void
AddEventHandler("OnMapTransition", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |