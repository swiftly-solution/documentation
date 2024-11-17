---
title: OnEventTicketModified
index: true
order: 2
category:
  - Guide
---

# OnEventTicketModified
This event is triggered when event_ticket_modified is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnEventTicketModified", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |