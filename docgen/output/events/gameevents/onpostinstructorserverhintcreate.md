---
title: OnPostInstructorServerHintCreate
index: true
order: 2
category:
  - Guide
---

# OnPostInstructorServerHintCreate
This event is triggered after instructor_server_hint_create is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostInstructorServerHintCreate", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|             Key            | Data Type |
| :------------------------: | :-------: |
|          `userid`          |   `int`   |
|       `hint_entindex`      |   `int`   |
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
| `hint_allow_nodraw_target` | `boolean` |
|     `hint_nooffscreen`     | `boolean` |
|     `hint_forcecaption`    | `boolean` |
|  `hint_local_player_only`  | `boolean` |
|     `hint_start_sound`     |  `string` |
|      `hint_layoutfile`     |  `string` |
|    `hint_vr_panel_type`    |   `int`   |
|   `hint_vr_height_offset`  |  `float`  |
|     `hint_vr_offset_x`     |  `float`  |
|     `hint_vr_offset_y`     |  `float`  |
|     `hint_vr_offset_z`     |  `float`  |