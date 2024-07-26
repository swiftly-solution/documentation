---
title: OnPlayerDecal
index: true
order: 2
category:
  - Guide
---

# OnPlayerDecal
This event is triggered when player_decal is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerDecal", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |