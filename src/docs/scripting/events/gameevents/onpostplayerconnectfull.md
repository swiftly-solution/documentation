---
title: OnPostPlayerConnectFull
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerConnectFull
This event is triggered after player_connect_full is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerConnectFull", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |