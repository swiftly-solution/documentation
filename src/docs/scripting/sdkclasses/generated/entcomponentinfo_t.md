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
## Name 
```lua
@type string
Read: entcomponentinfo_t.Name
Write: entcomponentinfo_t.Name = value
```
## CPPClassname 
```lua
@type string
Read: entcomponentinfo_t.CPPClassname
Write: entcomponentinfo_t.CPPClassname = value
```
## NetworkDataReferencedDescription 
```lua
@type string
Read: entcomponentinfo_t.NetworkDataReferencedDescription
Write: entcomponentinfo_t.NetworkDataReferencedDescription = value
```
## NetworkDataReferencedPtrPropDescription 
```lua
@type string
Read: entcomponentinfo_t.NetworkDataReferencedPtrPropDescription
Write: entcomponentinfo_t.NetworkDataReferencedPtrPropDescription = value
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
## BaseClassComponentHelper (Read-Only)
```lua
@type CEntityComponentHelper
Read: entcomponentinfo_t.BaseClassComponentHelper
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