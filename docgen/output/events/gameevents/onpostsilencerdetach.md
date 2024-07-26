---
title: OnPostSilencerDetach
index: true
order: 2
category:
  - Guide
---

# OnPostSilencerDetach
This event is triggered after silencer_detach is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostSilencerDetach", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |