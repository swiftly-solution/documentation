---
title: OnPlayerConnectFull
index: true
order: 2
category:
  - Guide
---

# OnPlayerConnectFull
This event is triggered when player has sent final message in the connection sequence
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerConnectFull", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |