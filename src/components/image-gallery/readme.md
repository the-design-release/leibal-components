# image-gallery



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type      | Default     |
| -------------- | --------------- | ----------- | --------- | ----------- |
| `canEnquire`   | `can-enquire`   |             | `boolean` | `false`     |
| `images`       | `images`        |             | `string`  | `'[]'`      |
| `photographer` | `photographer`  |             | `string`  | `undefined` |
| `postExcerpt`  | `post-excerpt`  |             | `string`  | `undefined` |
| `postId`       | `post-id`       |             | `number`  | `undefined` |
| `postTitle`    | `post-title`    |             | `string`  | `undefined` |
| `previewImage` | `preview-image` |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [tele-portal](../tele-portal)
- [add-to-moods-button](../add-to-moods-button)
- [enquire-modal](../enquire-modal)

### Graph
```mermaid
graph TD;
  image-gallery --> tele-portal
  image-gallery --> add-to-moods-button
  image-gallery --> enquire-modal
  enquire-modal --> simple-button
  enquire-modal --> tele-portal
  enquire-modal --> simple-input
  style image-gallery fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
