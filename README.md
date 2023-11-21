# The Process of Building User Interfaces

## 1. Map out requirements/stories

Think about what the system should do and how that would work. Think about what information you expect the user to provide to it, and what the outputs would be, and how it should communicate the output to the user (should it be continuously available, or on demand, or by push notifications?).

## 2. Use the requirements to mock up the UI

Use a (ideally low-fidelity) tool for this (try out Pencil Project, there might be multiple versions, but we want to try the open-source Electron-based one) (or, check out this link https://www.zenframe.com/post/top-open-source-wireframe-tools) (or just draw with a tablet)

## 3. Use the mockup to map out a component tree

Can Pencil Project, or a different diagramming tool, help with visualizing this?

## 4. Build each component, using the TDD process (red, green, refactor).

Should you start with the "leaf" components and work up? Or start with the "root" components and work down? I think trial and error has the answer to this question, but I initially lean root-first.