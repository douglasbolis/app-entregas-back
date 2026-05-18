# Project Tasks: Delivery App Backend

This document outlines the tasks required to build the delivery app backend, based on the `SPECIFICATION.md` and `plan.md`.

**Feature Name:** Delivery App Backend

**MVP Scope:** User Story 1 (Authentication)

**Parallel Opportunities Identified:** Many tasks within user story phases can be executed in parallel, especially those involving creation of controllers and routes for different endpoints.

**Independent Test Criteria:** Each user story phase is designed to be independently testable once its tasks are completed.

---

## Phase 1: Setup (Completed)

*   [X] T001 Initialize project: `npm init -y` (Create `package.json`)
*   [X] T002 Install core dependencies: `npm install express cors`
*   [X] T003 Install dev dependencies: `npm install --save-dev typescript @types/node @types/express @types/cors tsx`
*   [X] T004 Create `tsconfig.json` with specific configuration
*   [X] T005 Update `package.json` with scripts (`dev`, `build`, `start`)

---

## Phase 2: Foundational Components

*   [X] T006 Create `src/server.ts` with basic Express setup, CORS, and JSON middleware.

---

## Phase 3: User Story 1 - Authentication

**User Story:** Enable users to log in.

*   [X] T007 [US1] [P] Create `src/controllers/authController.ts`.
*   [X] T008 [US1] [P] Create `src/routes/authRoutes.ts`.
*   [X] T009 [US1] Implement `POST /api/auth/login` logic in `src/controllers/authController.ts` and `src/routes/authRoutes.ts`.

---

## Phase 4: User Story 2 - Delivery Listing & Retrieval

**User Story:** Allow retrieving deliveries (all, by driver, by ID).

*   [X] T010 [US2] [P] Implement `GET /api/deliveries` logic in `src/controllers/deliveryController.ts` and `src/routes/deliveryRoutes.ts`.
*   [X] T011 [US2] [P] Implement `GET /api/deliveries/:id` logic in `src/controllers/deliveryController.ts` and `src/routes/deliveryRoutes.ts`.

---

## Phase 5: User Story 3 - Delivery Status Update

**User Story:** Allow updating delivery status.

*   [X] T012 [US3] Implement `PATCH /api/deliveries/:id/status` logic in `src/controllers/deliveryController.ts` and `src/routes/deliveryRoutes.ts`.

---

## Phase 6: User Story 4 - Delivery Management (CRUD)

**User Story:** Allow creating, updating, and deleting deliveries.

*   [X] T013 [US4] [P] Implement `POST /api/deliveries` logic in `src/controllers/deliveryController.ts` and `src/routes/deliveryRoutes.ts`.
*   [X] T014 [US4] [P] Implement `PUT /api/deliveries/:id` logic in `src/controllers/deliveryController.ts` and `src/routes/deliveryRoutes.ts`.
*   [X] T015 [US4] [P] Implement `DELETE /api/deliveries/:id` logic in `src/controllers/deliveryController.ts` and `src/routes/deliveryRoutes.ts`.

---

## Phase 7: Polish & Finalization

*   [X] T016 Create `README.md` with project overview.