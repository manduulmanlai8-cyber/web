const adminProducts = [
  {
    id: 1,
    name: "RTX Gaming Mouse",
    stock: 12,
    category: "Gaming",
    price: "149,000₮",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    stock: 7,
    category: "Keyboard",
    price: "229,000₮",
  },
];

import { useState } from "react";

export default function ManTechStore() {
  const [cartCount, setCartCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const products = [
    {
      id: 1,
      name: "Gaming Keyboard RGB",
      price: "189,000₮",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Wireless Gaming Mouse",
      price: "129,000₮",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Gaming Headset Pro",
      price: "249,000₮",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-cyan-500/20 backdrop-blur-md sticky top-0 z-50 bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-widest text-cyan-400">
            MAN-TECH
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#" className="hover:text-cyan-400 transition">Нүүр</a>
            <a href="#shop" className="hover:text-cyan-400 transition">Дэлгүүр</a>
            <a href="#about" className="hover:text-cyan-400 transition">Бидний тухай</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Холбоо барих</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLoggedIn(!loggedIn)}
              className="border border-cyan-500/40 px-4 py-2 rounded-xl hover:bg-cyan-500/10 transition"
            >
              {loggedIn ? "Профайл" : "Нэвтрэх"}
            </button>

            <button className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-2 rounded-xl font-bold text-black">
              Сагс ({cartCount})
            </button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="text-cyan-400 font-bold mb-4">Монголын Tech Store</p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              FUTURE OF
              <span className="text-cyan-400"> GAMING</span>
            </h2>

            <p className="text-zinc-400 text-lg mb-8 max-w-xl">
              Gaming setup, PC parts, keyboards, mouse, headset болон хамгийн сүүлийн үеийн tech бүтээгдэхүүнүүд.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-cyan-500 text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 transition">
                Одоо худалдаж авах
              </button>

              <button className="border border-cyan-500/40 px-8 py-4 rounded-2xl hover:bg-cyan-500/10 transition">
                Каталог үзэх
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-2xl border border-cyan-500/20"
            />
          </div>
        </div>
      </section>

      <section id="shop" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <h3 className="text-4xl font-black mb-2">Онцлох Бараанууд</h3>
            <p className="text-zinc-400">Хамгийн их зарагдаж буй gaming бүтээгдэхүүнүүд</p>
          </div>

          <input
            type="text"
            placeholder="Бараа хайх..."
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 w-72"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-500/40 hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  className="h-72 w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3">{product.name}</h4>

                <div className="flex items-center justify-between">
                  <p className="text-cyan-400 text-xl font-black">
                    {product.price}
                  </p>

                  <button
                      onClick={() => setCartCount(cartCount + 1)}
                      className="bg-cyan-500 text-black px-5 py-2 rounded-xl font-bold hover:bg-cyan-400 transition"
                    >
                      Сагслах
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h4 className="text-2xl font-black mb-4 text-cyan-400">QPay</h4>
            <p className="text-zinc-400">
              Монголын бүх банкны QPay төлбөр дэмжинэ.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h4 className="text-2xl font-black mb-4 text-cyan-400">SocialPay</h4>
            <p className="text-zinc-400">
              Хаан банк SocialPay ашиглан хурдан төлбөр хийх.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h4 className="text-2xl font-black mb-4 text-cyan-400">MonPay</h4>
            <p className="text-zinc-400">
              MonPay болон банкны QR төлбөрийн систем.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10">
          <h3 className="text-4xl font-black mb-6">MAN-TECH тухай</h3>

          <p className="text-zinc-300 text-lg leading-8 max-w-4xl">
            MAN-TECH бол Монголын gaming болон technology чиглэлийн modern eCommerce platform юм. Бид хэрэглэгчдэд premium gaming бүтээгдэхүүнүүдийг хамгийн гоё дизайнтай платформоор хүргэх зорилготой.
          </p>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-3xl font-black mb-6">Холбоо барих</h3>

            <div className="space-y-4 text-zinc-300">
              <p>📧 support@mantech.mn</p>
              <p>📞 +976 9999-9999</p>
              <p>📍 Улаанбаатар, Монгол</p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-3xl font-black mb-6">Зурвас илгээх</h3>

            <div className="space-y-4">
              <input
                placeholder="Нэр"
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 outline-none focus:border-cyan-500"
              />

              <input
                placeholder="И-Мэйл"
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 outline-none focus:border-cyan-500"
              />

              <textarea
                placeholder="Таны зурвас"
                rows={5}
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 outline-none focus:border-cyan-500"
              />

              <button className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-cyan-400 transition">
                Илгээх
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <h3 className="text-4xl font-black mb-2">Admin Dashboard</h3>
            <p className="text-zinc-400">
              Бараа нэмэх, засах, устгах удирдлагын хэсэг
            </p>
          </div>

          <button className="bg-cyan-500 text-black px-6 py-3 rounded-2xl font-bold hover:bg-cyan-400 transition">
            + Бараа Нэмэх
          </button>
        </div>

        <div className="overflow-x-auto bg-zinc-950 border border-zinc-800 rounded-3xl">
          <table className="w-full text-left">
            <thead className="border-b border-zinc-800 text-zinc-400">
              <tr>
                <th className="p-5">Барааны нэр</th>
                <th className="p-5">Төрөл</th>
                <th className="p-5">Үлдэгдэл</th>
                <th className="p-5">Үнэ</th>
                <th className="p-5">Үйлдэл</th>
              </tr>
            </thead>

            <tbody>
              {adminProducts.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-zinc-900 hover:bg-zinc-900/40 transition"
                >
                  <td className="p-5 font-semibold">{item.name}</td>
                  <td className="p-5 text-zinc-400">{item.category}</td>
                  <td className="p-5 text-zinc-400">{item.stock}</td>
                  <td className="p-5 text-cyan-400 font-bold">{item.price}</td>
                  <td className="p-5 flex gap-3">
                    <button className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-500/30 transition">
                      Засах
                    </button>

                    <button className="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl hover:bg-red-500/30 transition">
                      Устгах
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">
          <h3 className="text-4xl font-black mb-8">
            Firebase / Supabase холболтын бүтэц
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-zinc-300">
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-cyan-400 font-black text-xl mb-4">
                Authentication
              </h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Login/Register</li>
                <li>• Google Login</li>
                <li>• Admin эрх</li>
                <li>• User profile</li>
              </ul>
            </div>

            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-cyan-400 font-black text-xl mb-4">
                Database
              </h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Products collection</li>
                <li>• Orders collection</li>
                <li>• Users collection</li>
                <li>• Reviews collection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-3xl font-black mb-6">Нэвтрэх</h3>

            <div className="space-y-4">
              <input
                placeholder="И-Мэйл"
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 outline-none focus:border-cyan-500"
              />

              <input
                type="password"
                placeholder="Нууц үг"
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 outline-none focus:border-cyan-500"
              />

              <button
                onClick={() => setLoggedIn(true)}
                className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-cyan-400 transition w-full"
              >
                Login
              </button>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-3xl font-black mb-6">Төлбөр Төлөх</h3>

            <div className="space-y-4">
              <div className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-center justify-between">
                <span>QPay QR</span>
                <span className="text-cyan-400">READY</span>
              </div>

              <div className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-center justify-between">
                <span>Khan Bank</span>
                <span className="text-cyan-400">CONNECTED</span>
              </div>

              <div className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-center justify-between">
                <span>SocialPay</span>
                <span className="text-cyan-400">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10">
          <h3 className="text-4xl font-black mb-6">Deployment Guide</h3>

          <div className="grid md:grid-cols-3 gap-6 text-zinc-300">
            <div className="bg-black rounded-2xl border border-zinc-800 p-6">
              <h4 className="text-cyan-400 font-black mb-3">1. Firebase</h4>
              <p className="text-zinc-400 text-sm">
                Firebase project үүсгээд authentication болон database connect хийх.
              </p>
            </div>

            <div className="bg-black rounded-2xl border border-zinc-800 p-6">
              <h4 className="text-cyan-400 font-black mb-3">2. Vercel Deploy</h4>
              <p className="text-zinc-400 text-sm">
                GitHub дээр upload хийж Vercel ашиглан deploy хийх.
              </p>
            </div>

            <div className="bg-black rounded-2xl border border-zinc-800 p-6">
              <h4 className="text-cyan-400 font-black mb-3">3. Domain</h4>
              <p className="text-zinc-400 text-sm">
                man-tech.mn domain холбоод live ecommerce website болгох.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        © 2026 MAN-TECH — All Rights Reserved.
      </footer>
    </div>
  );
}
