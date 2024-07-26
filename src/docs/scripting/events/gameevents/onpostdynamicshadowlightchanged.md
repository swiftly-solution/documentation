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
@event returns void
AddEventHandler("OnPostDynamicShadowLightChanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |