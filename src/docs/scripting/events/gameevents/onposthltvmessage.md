---
title: OnPostHltvMessage
index: true
order: 2
category:
  - Guide
---

# OnPostHltvMessage
This event is triggered after hltv_message is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostHltvMessage", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |