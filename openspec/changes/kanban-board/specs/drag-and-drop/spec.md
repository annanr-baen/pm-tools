## ADDED Requirements

### Requirement: User can drag a task card to another column
The system SHALL allow the user to drag a task card from its current column and drop it onto a different status column. Upon dropping, the task's status SHALL update to match the target column.

#### Scenario: Dragging a task from Backlog to Todo
- **WHEN** the user drags a task card from the "Backlog" column
- **AND** drops it onto the "Todo" column
- **THEN** the task's status SHALL change to "todo"
- **AND** the task card SHALL appear in the "Todo" column
- **AND** the task SHALL no longer appear in the "Backlog" column

#### Scenario: Dragging a task from In Progress to Done
- **WHEN** the user drags a task card from the "In Progress" column
- **AND** drops it onto the "Done" column
- **THEN** the task's status SHALL change to "done"
- **AND** the task card SHALL appear in the "Done" column

### Requirement: Visual feedback during drag operation
The system SHALL provide visual feedback when a drag operation is in progress to help the user understand the interaction.

#### Scenario: Dragged card shows drag state
- **WHEN** the user starts dragging a task card
- **THEN** the original card SHALL show a reduced opacity or visual indicator that it is being dragged

#### Scenario: Drop target column highlights on hover
- **WHEN** the user drags a task card over a valid drop target column
- **THEN** the target column SHALL display a visual highlight (e.g., border color change or background change) indicating it can accept the drop

#### Scenario: Drop target highlight removes on drag leave
- **WHEN** the user drags a task card away from a column
- **THEN** the column SHALL remove its drop target highlight

### Requirement: Dropped task status is persisted
The system SHALL persist the updated task status to `localStorage` immediately after a successful drag-and-drop operation.

#### Scenario: Status change persists after drag-and-drop
- **WHEN** the user drags a task from "Todo" to "In Progress"
- **AND** refreshes the page
- **THEN** the task SHALL appear in the "In Progress" column

### Requirement: Drag-and-drop between any columns
The system SHALL allow dragging tasks between any two columns in any direction (forward or backward in the workflow).

#### Scenario: Moving a task backward from Done to Todo
- **WHEN** the user drags a task from the "Done" column
- **AND** drops it onto the "Todo" column
- **THEN** the task's status SHALL change to "todo"
- **AND** the task card SHALL move to the "Todo" column
