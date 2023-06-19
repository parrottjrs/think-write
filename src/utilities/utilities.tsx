export const getNotes = () => {
  const maybeNotes = localStorage.getItem("notes");
  return maybeNotes ? JSON.parse(maybeNotes) : [];
};
