import { useState } from "react";

export default function AddWordForm({ onAddWord }) {
  const [newWord, setNewWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newWord || !meaning) return;
    onAddWord({ word: newWord, meaning }); // send data UP to App.jsx
    setNewWord("");
    setMeaning("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold mb-2">Add a New Word</h2>

      <input
        type="text"
        placeholder="German Word"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        className="w-full p-2 rounded border border-gray-500 bg-gray-200 text-black placeholder-gray-500"
      />

      <input
        type="text"
        placeholder="Meaning"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
        className="w-full p-2 rounded border border-gray-500 bg-gray-200 text-black placeholder-gray-500"
      />

      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-medium"
      >
        Add Word
      </button>
    </form>
  );
}
