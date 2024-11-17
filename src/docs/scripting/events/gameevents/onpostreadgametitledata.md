---
title: OnPostReadGameTitledata
index: true
order: 2
category:
  - Guide
---

# OnPostReadGameTitledata
This event is triggered after read_game_titledata is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostReadGameTitledata", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |