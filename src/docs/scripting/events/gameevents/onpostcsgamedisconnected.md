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
@event returns void
AddEventHandler("OnPostCsGameDisconnected", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |