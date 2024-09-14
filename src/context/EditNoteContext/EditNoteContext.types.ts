export interface IEditNoteContext {
  isEditNote: boolean;
  editNote: (editState: boolean) => void;
}
