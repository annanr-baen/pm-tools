## ADDED Requirements

### Requirement: Board displays four status columns
The system SHALL display a Kanban board with exactly four columns in order: **Backlog**, **Todo**, **In Progress**, **Done**. Each column SHALL display its name as a header and a count of tasks within it.

#### Scenario: Board renders all columns on page load
- **WHEN** the user navigates to the main page
- **THEN** the board SHALL display four columns in order: Backlog, Todo, In Progress, Done
- **AND** each column SHALL show its name and task count (e.g., "Backlog (3)")

#### Scenario: Empty board state
- **WHEN** the board has no tasks
- **THEN** each column SHALL display a count of 0
- **AND** each column SHALL show an empty state placeholder

### Requirement: Tasks are displayed as cards within their status column
The system SHALL render each task as a card inside the column matching its current status. Each card SHALL display the task title, priority badge, and assignee.

#### Scenario: Task card displays key information
- **WHEN** a task exists with title "Fix login bug", priority "high", and assignee "John"
- **THEN** the task card SHALL display the title "Fix login bug"
- **AND** a priority badge showing "high"
- **AND** the assignee name "John"

#### Scenario: Tasks appear in correct column
- **WHEN** a task has status "in-progress"
- **THEN** the task card SHALL appear in the "In Progress" column

### Requirement: Board layout is responsive
The system SHALL render the board with a horizontal scrollable layout when columns overflow the viewport width on smaller screens.

#### Scenario: Board scrolls horizontally on small screens
- **WHEN** the viewport width is less than the total width of all four columns
- **THEN** the board SHALL be horizontally scrollable
- **AND** all four columns SHALL remain accessible via scroll
