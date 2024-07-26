---
title: OnPostGameNewmap
index: true
order: 2
category:
  - Guide
---

# OnPostGameNewmap
This event is triggered after game_newmap is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostGameNewmap", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|   `mapname`  |  `string` |
| `transition` | `boolean` |