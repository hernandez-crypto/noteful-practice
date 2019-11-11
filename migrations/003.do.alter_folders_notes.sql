CREATE TYPE folderID AS INTEGER REFERENCES noteful_folder(id);
ALTER TABLE blogful_notes
    ADD COLUMN 
        folder folderID;


CREATE TYPE notesID AS INTEGER REFERENCES noteful_notes(folder);
ALTER TABLE blogful_folders
    ADD COLUMN 
        notes notesID;