export class NotValidAngularWorkspace extends Error {
  constructor() {
    super();
    this.message = "Could not find Angular workspace configuration";
    this.name = "NotValidAngularWorkspaceError";
  }
}
