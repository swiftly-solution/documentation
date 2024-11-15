---
title: OnPostEndmatchCmmStartRevealItems
index: true
order: 2
category:
  - Guide
---

# OnPostEndmatchCmmStartRevealItems
This event is triggered after endmatch_cmm_start_reveal_items is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostEndmatchCmmStartRevealItems", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |