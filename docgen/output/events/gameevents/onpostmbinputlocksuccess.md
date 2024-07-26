---
title: OnPostMbInputLockSuccess
index: true
order: 2
category:
  - Guide
---

# OnPostMbInputLockSuccess
This event is triggered after mb_input_lock_success is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostMbInputLockSuccess", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |