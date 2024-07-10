---
title: OnClientDisconnect
index: true
order: 2
category:
  - Guide
---

# OnClientDisconnect
This event is triggered when client_disconnect is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnClientDisconnect", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |