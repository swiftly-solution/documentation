---
title: AddHookEntityOutput
index: true
order: 2
category:
  - Guide
---

# AddHookEntityOutput
Adds a hook output for an entity.
::: tabs
@tab Lua
```lua
--- @param className string
--- @param output string
--- @return number HookHandle
AddHookEntityOutput(className, output)
```
#### Example
To hook an entity output, you need to specify the classname and the output you want, add an [AddPreHookListener](https://swiftlycs2.net/docs/scripting/hooks/addprehooklistener.html) or an [AddPostHookListener](https://swiftlycs2.net/docs/scripting/hooks/addposthooklistener.html) using the following event callback
```lua
local hookoutput = AddHookEntityOutput("weapon_knife", "*")
AddPreHookListener(hookoutput, function(event --[[ Event ]], iooutput_ptr --[[ string ]], event_output --[[ string ]], activator_ptr --[[ string ]], caller_ptr --[[ string ]], delay --[[ number ]])
    -- In this example we're listening to all the outputs of weapon_knife.
    return EventResult.Continue
end)
```
:::