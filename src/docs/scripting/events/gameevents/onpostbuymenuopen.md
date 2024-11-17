---
title: OnPostBuymenuOpen
index: true
order: 2
category:
  - Guide
---

# OnPostBuymenuOpen
This event is triggered after buymenu_open is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostBuymenuOpen", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |