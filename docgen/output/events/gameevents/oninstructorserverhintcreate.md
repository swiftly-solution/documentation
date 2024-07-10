---
title: OnInstructorServerHintCreate
index: true
order: 2
category:
  - Guide
---

# OnInstructorServerHintCreate
This event is triggered when create a hint using data supplied entirely by the server/map. Intended for hints to smooth playtests before content is ready to make the hint unneccessary. NOT INTENDED AS A SHIPPABLE CRUTCH
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnInstructorServerHintCreate", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|             Key            | Data Type |
| :------------------------: | :-------: |
|          `userid`          |   `int`   |
|         `hint_name`        |  `string` |
|     `hint_replace_key`     |  `string` |
|        `hint_target`       |   `int`   |
|   `hint_activator_userid`  |   `int`   |
|       `hint_timeout`       |   `int`   |
|    `hint_icon_onscreen`    |  `string` |
|    `hint_icon_offscreen`   |  `string` |
|       `hint_caption`       |  `string` |
|  `hint_activator_caption`  |  `string` |
|        `hint_color`        |  `string` |
|     `hint_icon_offset`     |  `float`  |
|        `hint_range`        |  `float`  |
|        `hint_flags`        |   `int`   |
|       `hint_binding`       |  `string` |
|   `hint_gamepad_binding`   |  `string` |
| `hint_allow_nodraw_target` | `boolean` |
|     `hint_nooffscreen`     | `boolean` |
|     `hint_forcecaption`    | `boolean` |
|  `hint_local_player_only`  | `boolean` |