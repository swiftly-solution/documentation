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
@event returns void
AddEventHandler("OnHltvMessage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |