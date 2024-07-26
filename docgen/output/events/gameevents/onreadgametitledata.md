---
title: OnReadGameTitledata
index: true
order: 2
category:
  - Guide
---

# OnReadGameTitledata
This event is triggered when read_game_titledata is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnReadGameTitledata", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |