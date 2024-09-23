import { child, get, ref } from "firebase/database";
import { database } from "@src/firebase";

export function getDatabaseNotes() {
  const dbRef = ref(database);

  const dbFildsOfNotes = get(child(dbRef, `/notes`));

  return dbFildsOfNotes;
}
