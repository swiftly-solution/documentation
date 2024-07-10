---
title: OnEndmatchCmmStartRevealItems
index: true
order: 2
category:
  - Guide
---

# OnEndmatchCmmStartRevealItems
This event is triggered when endmatch_cmm_start_reveal_items is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnEndmatchCmmStartRevealItems", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |