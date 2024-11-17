---
title: OnGameuiHidden
index: true
order: 2
category:
  - Guide
---

# OnGameuiHidden
This event is triggered when gameui_hidden is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnGameuiHidden", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |