---
title: OnHostnameChanged
index: true
order: 2
category:
  - Guide
---

# OnHostnameChanged
This event is triggered when hostname_changed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHostnameChanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `hostname` |  `string` |