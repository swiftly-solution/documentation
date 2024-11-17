---
title: OnMbInputLockSuccess
index: true
order: 2
category:
  - Guide
---

# OnMbInputLockSuccess
This event is triggered when mb_input_lock_success is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnMbInputLockSuccess", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |