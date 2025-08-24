


// src/components/Header.jsx
export default function Header({ title, subtitle }) {
  return (
    <header className="p-4 border-b">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle ? (
          <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
}


