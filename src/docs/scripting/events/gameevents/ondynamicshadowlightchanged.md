---
title: OnDynamicShadowLightChanged
index: true
order: 2
category:
  - Guide
---

# OnDynamicShadowLightChanged
This event is triggered when dynamic_shadow_light_changed is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDynamicShadowLightChanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |