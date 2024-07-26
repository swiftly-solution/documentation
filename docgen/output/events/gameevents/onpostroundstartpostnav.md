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
@event returns void
AddEventHandler("OnPostRoundStartPostNav", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |