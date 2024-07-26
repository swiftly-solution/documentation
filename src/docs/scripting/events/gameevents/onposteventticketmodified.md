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
@event returns void
AddEventHandler("OnPostEventTicketModified", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |