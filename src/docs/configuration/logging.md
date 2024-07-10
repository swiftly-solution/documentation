---
title: Logging Configuration
icon: list
order: 1
index: true
category:
  - Guide
---

# Logging Configuration

To enable the Logging for Swiftly you need to enable it in `addons/swiftly/configs/core.json`:

```json title="core.json"
{
    "logging": {
        "enabled": true,
        "mode": "daily"
    },
    ...
}
```

## Logging Mode

The logging mode can be chosen between 3 values: `daily` / `map` / `permanent`.

### Daily Mode

The log file is changed every day.

### Map Mode

The log file is changed every single map. If the log file is already present for the specific map, the logs will be appended.

### Permanent Mode

The log file will remain the same for every day and every map. All the logs will be appended to that only file.

## Example

Below will be an example of daily logging.

```json title="core.json"
{
    "logging": {
        "enabled": true,
        "mode": "daily"
    },
    ...
}
```

<center>
    ![Daily Logging](/logging/example.png)
</center>
