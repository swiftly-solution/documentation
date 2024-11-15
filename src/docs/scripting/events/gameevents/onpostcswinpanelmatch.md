---
title: OnPostCsWinPanelMatch
index: true
order: 2
category:
  - Guide
---

# OnPostCsWinPanelMatch
This event is triggered after cs_win_panel_match is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostCsWinPanelMatch", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |