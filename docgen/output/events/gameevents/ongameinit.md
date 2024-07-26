---
title: OnGameInit
index: true
order: 2
category:
  - Guide
---

# OnGameInit
This event is triggered when game_init is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnGameInit", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |