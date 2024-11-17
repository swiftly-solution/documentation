---
title: OnPostPlayerHintmessage
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerHintmessage
This event is triggered after player_hintmessage is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerHintmessage", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `hintmessage` |  `string` |