---
title: OnPostHltvChat
index: true
order: 2
category:
  - Guide
---

# OnPostHltvChat
This event is triggered after hltv_chat is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostHltvChat", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|   `text`  |  `string` |
| `steamID` |  `uint64` |