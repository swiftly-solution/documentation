---
title: OnGameNewmap
index: true
order: 2
category:
  - Guide
---

# OnGameNewmap
This event is triggered when send when new map is completely loaded
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnGameNewmap", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `mapname` |  `string` |