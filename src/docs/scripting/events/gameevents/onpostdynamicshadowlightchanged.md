---
title: OnPostDynamicShadowLightChanged
index: true
order: 2
category:
  - Guide
---

# OnPostDynamicShadowLightChanged
This event is triggered after dynamic_shadow_light_changed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostDynamicShadowLightChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |