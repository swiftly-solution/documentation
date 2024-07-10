---
title: AddPreHookListener
index: true
order: 2
category:
  - Guide
---

# AddPreHookListener
Adds a new hook listener before the hook is executed.
::: tabs
@tab Lua
```lua
@returns EventHandler
AddPreHookListener(hookHandle --[[ HookHandle ]], callback --[[ function ]])
```
The callback has the following arguments:
```lua
cb(event --[[ Event ]])
```
The callback may return a value of EventResult.
:::