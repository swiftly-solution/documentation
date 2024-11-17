---
title: OnPostCsGameDisconnected
index: true
order: 2
category:
  - Guide
---

# OnPostCsGameDisconnected
This event is triggered after cs_game_disconnected is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostCsGameDisconnected", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |