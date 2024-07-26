---
title: OnPostGameuiHidden
index: true
order: 2
category:
  - Guide
---

# OnPostGameuiHidden
This event is triggered after gameui_hidden is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostGameuiHidden", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |