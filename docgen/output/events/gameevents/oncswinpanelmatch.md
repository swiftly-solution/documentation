---
title: OnCsWinPanelMatch
index: true
order: 2
category:
  - Guide
---

# OnCsWinPanelMatch
This event is triggered when cs_win_panel_match is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnCsWinPanelMatch", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |