---
title: OnMbInputLockCancel
index: true
order: 2
category:
  - Guide
---

# OnMbInputLockCancel
This event is triggered when mb_input_lock_cancel is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnMbInputLockCancel", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |