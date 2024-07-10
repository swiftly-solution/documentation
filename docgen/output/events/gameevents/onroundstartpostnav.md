---
title: OnRoundStartPostNav
index: true
order: 2
category:
  - Guide
---

# OnRoundStartPostNav
This event is triggered when round_start_post_nav is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundStartPostNav", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |