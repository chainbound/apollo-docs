---
sidebar_position: 2
---
# Context variables and functions

### `transform` block
#### Variables
* Any `input` or `output` of methods and events

#### Functions
* `parse_decimals(raw, decimals)`
* `upper(str)`
* `lower(str)`

### `save` block
#### Variables
* Any `input` or `output` of methods and events
* Any variable from `transform`
* `blocknumber`
* `timestamp`
* `contract_address`
* `block_hash`
* `tx_hash` (for events)
* `tx_index` (for events)
* `tx_sender` (for events)

#### Functions
* `parse_decimals(raw, decimals)`
* `upper(str)`
* `lower(str)`