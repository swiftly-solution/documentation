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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnGameInit", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |