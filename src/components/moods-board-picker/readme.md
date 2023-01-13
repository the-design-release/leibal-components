# moods-board-picker



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description | Type        | Default     |
| ------------------- | --------- | ----------- | ----------- | ----------- |
| `boards`            | `boards`  |             | `string`    | `''`        |
| `selectedMoodBoard` | --        |             | `MoodBoard` | `undefined` |


## Events

| Event              | Description | Type                                 |
| ------------------ | ----------- | ------------------------------------ |
| `moodsBoardPicked` |             | `CustomEvent<MoodsBoardPickedEvent>` |


## Dependencies

### Used by

 - [moods-modal](../moods-modal)

### Depends on

- [simple-button](../simple-button)

### Graph
```mermaid
graph TD;
  moods-board-picker --> simple-button
  moods-modal --> moods-board-picker
  style moods-board-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
