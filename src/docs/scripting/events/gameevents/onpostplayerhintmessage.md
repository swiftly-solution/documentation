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
@event returns void
AddEventHandler("OnPostPlayerHintmessage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `hintmessage` |  `string` |