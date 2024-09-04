---
title: CNavVolumeBreadthFirstSearch
index: true
order: 2
category:
  - Guide
---

# CNavVolumeBreadthFirstSearch

::: tabs
@tab Lua
# Constructor
```lua
CNavVolumeBreadthFirstSearch(ptr --[[ string ]])
```
# Properties
## StartPos 
```lua
@type Vector
Read: cnavvolumebreadthfirstsearch.StartPos
Write: cnavvolumebreadthfirstsearch.StartPos = value
```
## SearchDist 
```lua
@type number
Read: cnavvolumebreadthfirstsearch.SearchDist
Write: cnavvolumebreadthfirstsearch.SearchDist = value
```
## Parent (Read-Only)
```lua
@type CNavVolumeCalculatedVector
Read: cnavvolumebreadthfirstsearch.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnavvolumebreadthfirstsearch:ToPtr()
```
## IsValid
```lua
@returns bool
cnavvolumebreadthfirstsearch:IsValid()
```

:::