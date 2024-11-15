---
title: OnPostEventTicketModified
index: true
order: 2
category:
  - Guide
---

# OnPostEventTicketModified
This event is triggered after event_ticket_modified is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostEventTicketModified", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |