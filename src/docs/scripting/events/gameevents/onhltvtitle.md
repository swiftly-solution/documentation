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
@event returns void
AddEventHandler("OnHltvTitle", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |