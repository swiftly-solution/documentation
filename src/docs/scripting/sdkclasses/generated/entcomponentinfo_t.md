---
title: EntComponentInfo_t
index: true
order: 2
category:
  - Guide
---

# EntComponentInfo_t

::: tabs
@tab Lua
# Constructor
```lua
EntComponentInfo_t(ptr --[[ string ]])
```
# Properties
## Name (Read-Only)
```lua
@type string
Read: entcomponentinfo_t.Name
```
## CPPClassname (Read-Only)
```lua
@type string
Read: entcomponentinfo_t.CPPClassname
```
## NetworkDataReferencedDescription (Read-Only)
```lua
@type string
Read: entcomponentinfo_t.NetworkDataReferencedDescription
```
## NetworkDataReferencedPtrPropDescription (Read-Only)
```lua
@type string
Read: entcomponentinfo_t.NetworkDataReferencedPtrPropDescription
```
## RuntimeIndex 
```lua
@type number
Read: entcomponentinfo_t.RuntimeIndex
Write: entcomponentinfo_t.RuntimeIndex = value
```
## Flags 
```lua
@type number
Read: entcomponentinfo_t.Flags
Write: entcomponentinfo_t.Flags = value
```
## BaseClassComponentHelper 
```lua
@type CEntityComponentHelper
Read: entcomponentinfo_t.BaseClassComponentHelper
Write: entcomponentinfo_t.BaseClassComponentHelper = value
```
# Functions
## ToPtr
```lua
@returns string
entcomponentinfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
entcomponentinfo_t:IsValid()
```

:::