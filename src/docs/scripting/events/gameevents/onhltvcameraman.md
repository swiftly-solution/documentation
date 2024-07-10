---
title: OnHltvCameraman
index: true
order: 2
category:
  - Guide
---

# OnHltvCameraman
This event is triggered when a spectator/player is a cameraman
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHltvCameraman", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |