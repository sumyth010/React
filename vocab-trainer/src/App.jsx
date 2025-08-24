import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddWordForm from "./components/AddWordForm";

export default function App() {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);

  // load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("words");
    if (saved) {
      setWords(JSON.parse(saved));
    }
  }, []);

  // save to localStorage whenever words change
  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  const handleAddWord = (wordObj) => {
    setWords([...words, wordObj]);
  };

  const handleDeleteWord = (indexToDelete) => {
    setWords(words.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        title="Vocab Trainer"
        subtitle="Practice German words with flashcards"
      />

      <main className="max-w-3xl mx-auto p-6 space-y-8">
        {/* Add Word Form */}
        <AddWordForm onAddWord={handleAddWord} />

        {/* Word List */}
        <div>
          <h2 className="text-xl font-semibold mb-3">My Words</h2>
          {words.length === 0 ? (
            <p className="text-gray-400">No words added yet.</p>
          ) : (
            <ul className="space-y-2">
              {words.map((item, index) => (
                <li
                  key={index}
                  className="p-3 bg-gray-800 rounded-lg flex justify-between items-center"
                >
                  <span>
                    <strong>{item.word}</strong> — {item.meaning}
                  </span>
                  <button
                    onClick={() => handleDeleteWord(index)}
                    className="ml-4 px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Flashcard Practice */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center space-y-4">
          <h2 className="text-xl font-semibold">Flashcard Practice</h2>

          {words.length === 0 ? (
            <p className="text-gray-400">Add some words to start practicing.</p>
          ) : (
            <>
              <div className="p-6 bg-gray-800 rounded-lg">
                <p className="text-2xl font-bold">{words[currentIndex].word}</p>
                {showMeaning && (
                  <p className="mt-2 text-lg text-gray-300">
                    {words[currentIndex].meaning}
                  </p>
                )}
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowMeaning(!showMeaning)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                >
                  {showMeaning ? "Hide" : "Show"} Meaning
                </button>

                <button
                  onClick={() =>
                    setCurrentIndex((currentIndex + 1) % words.length)
                  }
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
                >
                  Next Word →
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
