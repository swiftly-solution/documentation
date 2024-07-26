---
title: OnBulletDamage
index: true
order: 2
category:
  - Guide
---

# OnBulletDamage
This event is triggered when bullet_damage is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBulletDamage", function(event --[[ Event ]])
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