---
title: OnPostWriteGameTitledata
index: true
order: 2
category:
  - Guide
---

# OnPostWriteGameTitledata
This event is triggered after write_game_titledata is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostWriteGameTitledata", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |