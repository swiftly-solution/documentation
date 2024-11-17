---
title: OnHltvMessage
index: true
order: 2
category:
  - Guide
---

# OnHltvMessage
This event is triggered when hltv_message is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnHltvMessage", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |