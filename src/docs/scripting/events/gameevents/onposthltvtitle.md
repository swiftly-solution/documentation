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
@event returns void
AddEventHandler("OnPostHltvTitle", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |