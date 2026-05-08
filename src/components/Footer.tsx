export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
        <div className="flex items-center gap-3 mb-6">
          <img src="/imgs/progressus.png" alt="Progressus Logo" className="w-10 h-8" />
          <span className="text-2xl font-bold tracking-tight text-white">
            PROGRESSUS
          </span>
        </div>
        <p className="text-gray-400 text-center">
          &copy; 2024 Progressus. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
