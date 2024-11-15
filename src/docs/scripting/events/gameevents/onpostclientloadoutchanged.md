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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostClientLoadoutChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |