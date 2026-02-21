## ADDED Requirements

### Requirement: User can create a new task
The system SHALL provide a way to create a new task by opening a dialog with fields for title (required), description (optional), priority (default: "medium"), and assignee (optional). Upon submission, the task SHALL be added to the **Backlog** column with a unique ID and current timestamps.

#### Scenario: Creating a task with required fields only
- **WHEN** the user clicks the "Add Task" button
- **AND** fills in the title "Design homepage"
- **AND** submits the form
- **THEN** a new task SHALL be created with title "Design homepage", status "backlog", priority "medium"
- **AND** the task SHALL appear in the Backlog column
- **AND** the task SHALL have a unique ID and created/updated timestamps

#### Scenario: Creating a task with all fields
- **WHEN** the user fills in title "Setup CI/CD", description "Configure GitHub Actions", priority "high", assignee "Alice"
- **AND** submits the form
- **THEN** a new task SHALL be created with all provided values and status "backlog"

#### Scenario: Validation prevents empty title
- **WHEN** the user tries to submit the create task form with an empty title
- **THEN** the system SHALL display a validation error
- **AND** the task SHALL NOT be created

### Requirement: User can edit an existing task
The system SHALL allow users to edit a task's title, description, priority, and assignee through an edit dialog. The task's `updatedAt` timestamp SHALL be updated on save.

#### Scenario: Editing a task's title
- **WHEN** the user opens the edit dialog for a task with title "Old title"
- **AND** changes the title to "New title"
- **AND** saves the changes
- **THEN** the task title SHALL update to "New title"
- **AND** the `updatedAt` timestamp SHALL be updated

#### Scenario: Editing preserves unchanged fields
- **WHEN** the user opens the edit dialog and only changes the priority
- **AND** saves the changes
- **THEN** all other fields (title, description, assignee, status) SHALL remain unchanged

### Requirement: User can delete a task
The system SHALL allow users to delete a task with a confirmation step. Deleted tasks SHALL be removed from the board permanently.

#### Scenario: Deleting a task with confirmation
- **WHEN** the user clicks the delete action on a task
- **THEN** the system SHALL show a confirmation prompt
- **AND** if confirmed, the task SHALL be removed from the board

#### Scenario: Cancelling a delete
- **WHEN** the user clicks the delete action on a task
- **AND** cancels the confirmation
- **THEN** the task SHALL remain on the board unchanged

### Requirement: Tasks are persisted in localStorage
The system SHALL persist all tasks to `localStorage` so that data survives page refreshes. Tasks SHALL be loaded from `localStorage` on page load.

#### Scenario: Tasks survive page refresh
- **WHEN** the user creates a task and refreshes the page
- **THEN** the task SHALL still appear on the board in the same column

#### Scenario: Empty localStorage initializes empty board
- **WHEN** the user visits the app for the first time (no localStorage data)
- **THEN** the board SHALL display with empty columns and no tasks
