---
title: OnPostBulletDamage
index: true
order: 2
category:
  - Guide
---

# OnPostBulletDamage
This event is triggered after bullet_damage is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostBulletDamage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key        | Data Type |
| :----------------: | :-------: |
|      `victim`      |   `int`   |
|     `attacker`     |   `int`   |
|     `distance`     |  `float`  |
|   `damage_dir_x`   |  `float`  |
|   `damage_dir_y`   |  `float`  |
|   `damage_dir_z`   |  `float`  |
| `num_penetrations` |   `int`   |
|     `no_scope`     | `boolean` |
|      `in_air`      | `boolean` |