---
title: OnPlayerHintmessage
index: true
order: 2
category:
  - Guide
---

# OnPlayerHintmessage
This event is triggered when player_hintmessage is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerHintmessage", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `hintmessage` |  `string` |