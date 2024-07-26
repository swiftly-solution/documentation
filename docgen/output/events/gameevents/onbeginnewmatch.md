---
title: OnBeginNewMatch
index: true
order: 2
category:
  - Guide
---

# OnBeginNewMatch
This event is triggered when begin_new_match is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBeginNewMatch", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |