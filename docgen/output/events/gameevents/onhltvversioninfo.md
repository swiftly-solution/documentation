---
title: OnHltvVersioninfo
index: true
order: 2
category:
  - Guide
---

# OnHltvVersioninfo
This event is triggered when hltv_versioninfo is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHltvVersioninfo", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `version` |   `int`   |