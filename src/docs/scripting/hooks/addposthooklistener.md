---
title: AddPostHookListener
index: true
order: 2
category:
  - Guide
---

# AddPostHookListener
Adds a new hook listener after the hook is executed.
::: tabs
@tab Lua
```lua
@returns EventHandler
AddPostHookListener(hookHandle --[[ HookHandle ]], callback --[[ function ]])
```
The callback has the following arguments:
```lua
cb(event --[[ Event ]])
```
The callback may return a value of EventResult.
:::