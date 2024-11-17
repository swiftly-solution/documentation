---
title: OnRoundStartPostNav
index: true
order: 2
category:
  - Guide
---

# OnRoundStartPostNav
This event is triggered when round_start_post_nav is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnRoundStartPostNav", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |