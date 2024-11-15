---
title: NmCompressionSettings_t
index: true
order: 2
category:
  - Guide
---

# NmCompressionSettings_t

::: tabs
@tab Lua
# Constructor
```lua
NmCompressionSettings_t(ptr)
```
# Properties
## TranslationRangeX (Read-Only)
```lua
--- @type NmCompressionSettings_t::QuantizationRange_t
Read: nmcompressionsettings_t.TranslationRangeX
```
## TranslationRangeY (Read-Only)
```lua
--- @type NmCompressionSettings_t::QuantizationRange_t
Read: nmcompressionsettings_t.TranslationRangeY
```
## TranslationRangeZ (Read-Only)
```lua
--- @type NmCompressionSettings_t::QuantizationRange_t
Read: nmcompressionsettings_t.TranslationRangeZ
```
## ScaleRange (Read-Only)
```lua
--- @type NmCompressionSettings_t::QuantizationRange_t
Read: nmcompressionsettings_t.ScaleRange
```
## IsRotationStatic 
```lua
--- @type boolean
Read: nmcompressionsettings_t.IsRotationStatic
Write: nmcompressionsettings_t.IsRotationStatic = value
```
## IsTranslationStatic 
```lua
--- @type boolean
Read: nmcompressionsettings_t.IsTranslationStatic
Write: nmcompressionsettings_t.IsTranslationStatic = value
```
## IsScaleStatic 
```lua
--- @type boolean
Read: nmcompressionsettings_t.IsScaleStatic
Write: nmcompressionsettings_t.IsScaleStatic = value
```
# Functions
## ToPtr
```lua
@returns string
nmcompressionsettings_t:ToPtr()
```
## IsValid
```lua
@returns bool
nmcompressionsettings_t:IsValid()
```

:::