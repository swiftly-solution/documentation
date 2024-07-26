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
@event returns void
AddEventHandler("OnPostRoundStartPreEntity", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |