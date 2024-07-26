---
title: OnPostRoundPoststart
index: true
order: 2
category:
  - Guide
---

# OnPostRoundPoststart
This event is triggered after round_poststart is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostRoundPoststart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |