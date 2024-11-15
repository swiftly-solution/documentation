---
title: OnHltvChat
index: true
order: 2
category:
  - Guide
---

# OnHltvChat
This event is triggered when hltv_chat is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHltvChat", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|   `text`  |  `string` |
| `steamID` |  `uint64` |