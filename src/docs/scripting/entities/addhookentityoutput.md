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
--- @param event Event
--- @param iooutput_ptr string
--- @param event_output string
--- @param activator_ptr string
--- @param caller_ptr string
--- @param delay number
--- @return number|nil EventResult
AddPreHookListener(hookoutput, function(event, iooutput_ptr, event_output, activator_ptr, caller_ptr, delay)
    -- In this example we're listening to all the outputs of weapon_knife.
    return EventResult.Continue
end)
```
:::