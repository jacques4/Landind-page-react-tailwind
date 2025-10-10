function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">Tailwind CSS</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. 
            Elit sunt amet fugiat veniam occaecat.
          </p>
        </div>

        <div>
          <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">Useful links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Product</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Features</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Marketplace</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Company</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 dark:text-gray-400">Lomé, Togo</li>
            <li className="text-gray-600 dark:text-gray-400">Email : contact@contact.tg</li>
            <li className="text-gray-600 dark:text-gray-400">Phone : +228 XX XX XX XX</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Footer. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
