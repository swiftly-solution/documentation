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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostGameuiHidden", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |