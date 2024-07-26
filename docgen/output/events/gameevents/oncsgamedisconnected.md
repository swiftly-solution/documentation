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
@event returns void
AddEventHandler("OnCsGameDisconnected", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |