---
title: OnCsWinPanelMatch
index: true
order: 2
category:
  - Guide
---

# OnCsWinPanelMatch
This event is triggered when cs_win_panel_match is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnCsWinPanelMatch", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |