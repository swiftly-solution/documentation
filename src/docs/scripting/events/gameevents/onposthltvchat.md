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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostHltvChat", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|   `text`  |  `string` |
| `steamID` |  `uint64` |