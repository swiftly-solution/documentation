---
title: OnPostHltvTitle
index: true
order: 2
category:
  - Guide
---

# OnPostHltvTitle
This event is triggered after hltv_title is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostHltvTitle", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |