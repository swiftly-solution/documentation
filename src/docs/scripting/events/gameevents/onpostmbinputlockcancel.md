---
title: OnPostMbInputLockCancel
index: true
order: 2
category:
  - Guide
---

# OnPostMbInputLockCancel
This event is triggered after mb_input_lock_cancel is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostMbInputLockCancel", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |