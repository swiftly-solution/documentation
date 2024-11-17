---
title: OnPostRoundStartPostNav
index: true
order: 2
category:
  - Guide
---

# OnPostRoundStartPostNav
This event is triggered after round_start_post_nav is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostRoundStartPostNav", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |