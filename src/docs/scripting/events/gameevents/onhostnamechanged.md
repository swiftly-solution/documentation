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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnHostnameChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `hostname` |  `string` |