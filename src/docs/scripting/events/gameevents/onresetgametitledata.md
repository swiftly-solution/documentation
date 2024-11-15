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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnResetGameTitledata", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |