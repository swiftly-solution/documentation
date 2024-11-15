---
title: OnPostHostnameChanged
index: true
order: 2
category:
  - Guide
---

# OnPostHostnameChanged
This event is triggered after hostname_changed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostHostnameChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `hostname` |  `string` |