---
title: OnResetGameTitledata
index: true
order: 2
category:
  - Guide
---

# OnResetGameTitledata
This event is triggered when reset_game_titledata is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnResetGameTitledata", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |