---
title: OnEventTicketModified
index: true
order: 2
category:
  - Guide
---

# OnEventTicketModified
This event is triggered when event_ticket_modified is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnEventTicketModified", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |