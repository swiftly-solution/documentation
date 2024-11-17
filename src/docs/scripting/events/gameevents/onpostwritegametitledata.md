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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostWriteGameTitledata", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |