---
title: OnPostClientLoadoutChanged
index: true
order: 2
category:
  - Guide
---

# OnPostClientLoadoutChanged
This event is triggered after client_loadout_changed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostClientLoadoutChanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |