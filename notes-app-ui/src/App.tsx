import { useState } from "react";
import "./App.css"
import { title } from "process";

type Note = {
  id : number;
  title : string;
  content : string;
}

const App = () => {
  const [notes, setNotes] = useState<
    Note[]
  >([
    {
      id: 1,
      title: "note title 1",
      content: "content 1",
    },
    {
      id: 2,
      title: "note title 2",
      content: "content 2",
    },
    {
      id: 3,
      title: "note title 3",
      content: "content 3",
    },
    {
      id: 4,
      title: "note title 4",
      content: "content 4",
    },
  ]);

  const [title, SetTitle] = useState("");
  const [content, SetContent] = useState("");

  const [selectedNote,setSelectedNote] = 
    useState<Note | null>(null);

  const handleAddNote = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    setNotes([newNote, ...notes]);
    SetTitle("");
    SetContent("");
  };
  return(
  <div className="app-container">
    <form
      className="note-form"
      onSubmit={(event) => handleAddNote(event)}
    >
      <input
        value={title}
        onChange={(event)=>
          SetTitle(event.target.value)
        }
        placeholder="title"
        required
      />
      <textarea
        value={content}
        onChange={(event)=>
          SetContent(event.target.value)
        }
        placeholder="Content"
        rows={10}
        required
      ></textarea>
      <button
        type="submit">
        Add note
      </button>
    </form>
    <div className="notes-grid">
      {notes.map((note) => (
        <div className="notes-item">
          <div className="notes-header">
            <button>X</button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}

    </div>
  </div>)
}

export default App;