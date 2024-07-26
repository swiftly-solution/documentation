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
@event returns void
AddEventHandler("OnWriteGameTitledata", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |