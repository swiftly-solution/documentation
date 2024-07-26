---
title: OnPostGameInit
index: true
order: 2
category:
  - Guide
---

# OnPostGameInit
This event is triggered after game_init is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostGameInit", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |