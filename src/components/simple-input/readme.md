# simple-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                            | Default          |
| ------------- | ------------- | ----------- | --------------------------------------------------------------- | ---------------- |
| `name`        | `name`        |             | `string`                                                        | `undefined`      |
| `placeholder` | `placeholder` |             | `string`                                                        | `'Text here...'` |
| `required`    | `required`    |             | `boolean`                                                       | `false`          |
| `type`        | `type`        |             | `"email" \| "number" \| "password" \| "tel" \| "text" \| "url"` | `undefined`      |
| `value`       | `value`       |             | `string`                                                        | `undefined`      |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `valueChanged` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [enquire-modal](../enquire-modal)

### Graph
```mermaid
graph TD;
  enquire-modal --> simple-input
  style simple-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
