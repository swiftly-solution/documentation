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
@event returns void
AddEventHandler("OnPlayerHintmessage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `hintmessage` |  `string` |