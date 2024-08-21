---
title: Menu
icon: memory
order: 1
index: true
category:
  - Guide
---

# Menu

To change the menu configuration, you can modify the `addons/swiftly/configs/core.json`:

```json title="core.json"
{
    ...
    "menu": {
        "navigation_prefix" : "➤",
        "sound": {
            "use": {
                "name": "Vote.Cast.Yes",
                "volume": 0.75
            },
            "scroll": {
                "name": "UI.ContractType",
                "volume": 0.75
            },
            "exit": {
                "name": "Vote.Failed",
                "volume": 0.75
            }         
        },
        "buttons": {
            "use": "e",
            "scroll": "shift",
            "exit": {
                "option": false,
                "button": "tab"
            }
        }
    }
}
```

## Sound Name

To change the sound name, you need to choose a sound event name.

To find a sound event name, you need to:

1. Download [Source2Viewer](https://valveresourceformat.github.io/).
2. Open `game/csgo/pak01_dir.vpk`.
3. Locate folder `soundevents`.
4. Open files ending with the following extension: `.vsndevts_c`.
5. Choose the sound event name which you like.

### How do I know which is the sound event name?

The sound event name is the key located at the beginning of each sound data.

For example, in the following image the sound event name is `BaseCombatCharacter.AmmoPickup`.

![Example](https://cdn.swiftlycs2.net/docs/cfrma9p39u83fo7c97ixn57nu35hal73.png)

## Exit Option

To enable the Exit Option in the menu items, turn `menu.buttons.exit.option` on `true`, otherwise set it to `false`.

## Buttons

Below there is a list with all the buttons available in Swiftly at this moment.

> [!info]
> Some buttons may not work, due to the fact that Counter Strike 2 is not providing updates over `m_nButtons`.

|       Button Code      |           Name          |
|:----------------------:|:-----------------------:|
|        `mouse1`        |         `Mouse1`        |
|         `space`        |         `Space`         |
|         `ctrl`         |          `CTRL`         |
|           `w`          |           `W`           |
|           `s`          |           `S`           |
|           `e`          |           `E`           |
|          `esc`         |          `ESC`          |
|           `a`          |           `A`           |
|           `d`          |           `D`           |
|        `mouse2`        |         `Mouse2`        |
|    `unknown_key_run`   |    `Unknown Key Run`    |
|           `r`          |           `R`           |
|          `alt`         |          `ALT`          |
|         `shift`        |         `SHIFT`         |
|   `unknown_key_speed`  |   `Unknown Key Speed`   |
|  `unknown_key_hudzoom` |  `Unknown Key Hud Zoom` |
|  `unknown_key_weapon1` |  `Unknown Key Weapon 1` |
|  `unknown_key_weapon2` |  `Unknown Key Weapon 2` |
| `unknown_key_bullrush` | `Unknown Key Bull Rush` |
| `unknown_key_grenade1` | `Unknown Key Grenade 1` |
| `unknown_key_grenade2` | `Unknown Key Grenade 2` |
| `unknown_key_lookspin` | `Unknown Key Look Spin` |
|    `unknown_key_26`    |     `Unknown Key 26`    |
|    `unknown_key_27`    |     `Unknown Key 27`    |
|    `unknown_key_28`    |     `Unknown Key 28`    |
|    `unknown_key_29`    |     `Unknown Key 29`    |
|    `unknown_key_30`    |     `Unknown Key 30`    |
|    `unknown_key_31`    |     `Unknown Key 31`    |
|    `unknown_key_32`    |     `Unknown Key 32`    |
|          `tab`         |          `TAB`          |
|    `unknown_key_34`    |     `Unknown Key 34`    |
|           `f`          |           `F`           |
|    `unknown_key_36`    |     `Unknown Key 36`    |
|    `unknown_key_37`    |     `Unknown Key 37`    |
|    `unknown_key_38`    |     `Unknown Key 38`    |
|    `unknown_key_39`    |     `Unknown Key 39`    |
|    `unknown_key_40`    |     `Unknown Key 40`    |
|    `unknown_key_41`    |     `Unknown Key 41`    |
|    `unknown_key_42`    |     `Unknown Key 42`    |
|    `unknown_key_43`    |     `Unknown Key 43`    |
|    `unknown_key_44`    |     `Unknown Key 44`    |
|    `unknown_key_45`    |     `Unknown Key 45`    |
|    `unknown_key_46`    |     `Unknown Key 46`    |
|    `unknown_key_47`    |     `Unknown Key 47`    |
|    `unknown_key_48`    |     `Unknown Key 48`    |
|    `unknown_key_49`    |     `Unknown Key 49`    |
|    `unknown_key_50`    |     `Unknown Key 50`    |
|    `unknown_key_51`    |     `Unknown Key 51`    |
|    `unknown_key_52`    |     `Unknown Key 52`    |
|    `unknown_key_53`    |     `Unknown Key 53`    |
|    `unknown_key_54`    |     `Unknown Key 54`    |
|    `unknown_key_55`    |     `Unknown Key 55`    |
|    `unknown_key_56`    |     `Unknown Key 56`    |
|    `unknown_key_57`    |     `Unknown Key 57`    |
|    `unknown_key_58`    |     `Unknown Key 58`    |
|    `unknown_key_59`    |     `Unknown Key 59`    |
|    `unknown_key_60`    |     `Unknown Key 60`    |
|    `unknown_key_61`    |     `Unknown Key 61`    |
|    `unknown_key_62`    |     `Unknown Key 62`    |
|    `unknown_key_63`    |     `Unknown Key 63`    |