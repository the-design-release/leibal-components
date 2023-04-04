# moods-modal



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type      | Default |
| ----------------- | ------------------ | ----------- | --------- | ------- |
| `boards`          | `boards`           |             | `string`  | `''`    |
| `isAuthenticated` | `is-authenticated` |             | `boolean` | `false` |
| `moodsApiUrl`     | `moods-api-url`    |             | `string`  | `''`    |
| `wpApiNonce`      | `wp-api-nonce`     |             | `string`  | `''`    |


## Dependencies

### Depends on

- [tele-portal](../tele-portal)
- [moods-board-picker](../moods-board-picker)

### Graph
```mermaid
graph TD;
  moods-modal --> tele-portal
  moods-modal --> moods-board-picker
  moods-board-picker --> simple-button
  style moods-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
