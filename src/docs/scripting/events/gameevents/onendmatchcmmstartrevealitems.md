---
title: OnEndmatchCmmStartRevealItems
index: true
order: 2
category:
  - Guide
---

# OnEndmatchCmmStartRevealItems
This event is triggered when endmatch_cmm_start_reveal_items is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnEndmatchCmmStartRevealItems", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |