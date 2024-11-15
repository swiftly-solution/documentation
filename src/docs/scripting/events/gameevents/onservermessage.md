---
title: OnServerMessage
index: true
order: 2
category:
  - Guide
---

# OnServerMessage
This event is triggered when server_message is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnServerMessage", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |