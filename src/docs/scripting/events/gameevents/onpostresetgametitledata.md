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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostResetGameTitledata", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |