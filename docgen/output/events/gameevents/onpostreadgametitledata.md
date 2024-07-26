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
@event returns void
AddEventHandler("OnPostReadGameTitledata", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |