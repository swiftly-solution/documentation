---
title: OnCsGameDisconnected
index: true
order: 2
category:
  - Guide
---

# OnCsGameDisconnected
This event is triggered when cs_game_disconnected is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnCsGameDisconnected", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |