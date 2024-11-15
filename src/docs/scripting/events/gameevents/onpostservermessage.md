---
title: OnPostServerMessage
index: true
order: 2
category:
  - Guide
---

# OnPostServerMessage
This event is triggered after server_message is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostServerMessage", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |