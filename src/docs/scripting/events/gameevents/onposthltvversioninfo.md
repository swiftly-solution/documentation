---
title: OnPostHltvVersioninfo
index: true
order: 2
category:
  - Guide
---

# OnPostHltvVersioninfo
This event is triggered after hltv_versioninfo is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostHltvVersioninfo", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `version` |   `int`   |