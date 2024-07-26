---
title: OnPostBeginNewMatch
index: true
order: 2
category:
  - Guide
---

# OnPostBeginNewMatch
This event is triggered after begin_new_match is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostBeginNewMatch", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |