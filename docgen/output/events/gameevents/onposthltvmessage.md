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
@event returns void
AddEventHandler("OnPostHltvMessage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `text` |  `string` |