---
title: OnHltvVersioninfo
index: true
order: 2
category:
  - Guide
---

# OnHltvVersioninfo
This event is triggered when hltv_versioninfo is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHltvVersioninfo", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `version` |   `int`   |