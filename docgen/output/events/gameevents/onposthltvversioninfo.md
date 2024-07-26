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
@event returns void
AddEventHandler("OnPostHltvVersioninfo", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `version` |   `int`   |