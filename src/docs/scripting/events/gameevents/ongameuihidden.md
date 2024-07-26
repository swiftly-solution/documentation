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
@event returns void
AddEventHandler("OnGameuiHidden", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |