---
title: OnWriteGameTitledata
index: true
order: 2
category:
  - Guide
---

# OnWriteGameTitledata
This event is triggered when write_game_titledata is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnWriteGameTitledata", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |