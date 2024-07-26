---
title: OnPostSilencerOn
index: true
order: 2
category:
  - Guide
---

# OnPostSilencerOn
This event is triggered after silencer_on is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostSilencerOn", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |