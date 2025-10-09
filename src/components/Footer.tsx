
function Footer() {
  return (
   <footer className="bg-gray-900 text-gray-300 py-10">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Tailwind CSS</h3>
      <p className="text-sm">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat..
      </p>
    </div>


    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Liens utiles</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white transition">Product</a></li>
        <li><a href="#" className="hover:text-white transition">Features</a></li>
        <li><a href="#" className="hover:text-white transition">Marketplace</a></li>
        <li><a href="#" className="hover:text-white transition">Company</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
      <ul className="space-y-2 text-sm">
        <li>Lomé, Togo</li>
        <li>Email : contact@batiroute.tg</li>
        <li>Téléphone : +228 90 00 00 00</li>
      </ul>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
    © 2025 Batiroute Sarl. Tous droits réservés.
  </div>
</footer>

  )
}

export default Footer
