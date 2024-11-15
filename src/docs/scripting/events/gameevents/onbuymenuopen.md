---
title: OnBuymenuOpen
index: true
order: 2
category:
  - Guide
---

# OnBuymenuOpen
This event is triggered when buymenu_open is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnBuymenuOpen", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |