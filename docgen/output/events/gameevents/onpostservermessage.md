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
@event returns void
AddEventHandler("OnPostServerMessage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |