---
title: OnPostResetGameTitledata
index: true
order: 2
category:
  - Guide
---

# OnPostResetGameTitledata
This event is triggered after reset_game_titledata is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostResetGameTitledata", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |