import "./App.css"

const App = () => {
  return(
  <div className="app-container">
    <form className="note-form">
      <input
        placeholder="title"
        required
      />
      <textarea
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
      <div className="notes-item">
        <div className="notes-header">
          <button>X</button>
        </div>
        <h2>Note title</h2>
        <p>Note Content</p>
      </div>
    </div>
  </div>)
}

export default App;