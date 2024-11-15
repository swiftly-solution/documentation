---
title: OnHltvTitle
index: true
order: 2
category:
  - Guide
---

# OnHltvTitle
This event is triggered when hltv_title is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHltvTitle", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |