---
title: OnPostPlayerDecal
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerDecal
This event is triggered after player_decal is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerDecal", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |