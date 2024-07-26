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
@event returns void
AddEventHandler("OnServerMessage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |