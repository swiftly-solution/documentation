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
@event returns void
AddEventHandler("OnPostHostnameChanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `hostname` |  `string` |