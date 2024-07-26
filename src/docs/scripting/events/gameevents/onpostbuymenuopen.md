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
@event returns void
AddEventHandler("OnPostBuymenuOpen", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |