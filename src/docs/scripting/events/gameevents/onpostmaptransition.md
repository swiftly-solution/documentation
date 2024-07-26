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
@event returns void
AddEventHandler("OnPostMapTransition", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |