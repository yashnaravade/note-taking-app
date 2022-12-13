import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import NewNote from "./components/NewNote";

export type RawNote = {
  id: string;
};


export type Note = {
  id: string;
} & NoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};


export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

function App() {

  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  return (
    <div className="container my-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello world!</h1>} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id">
            <Route index element={<h1>Show page</h1>} />
            <Route path="edit" element={<h1>Edit page</h1>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
