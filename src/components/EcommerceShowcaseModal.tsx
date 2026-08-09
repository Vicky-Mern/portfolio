import React, { useState } from 'react';
import { 
  ShoppingBag, Search, ShoppingCart, User, Heart, ChevronRight, ShieldCheck, 
  CreditCard, Truck, Check, ArrowRight, BarChart3, Users, Package, DollarSign,
  MapPin, CheckCircle2, ChevronLeft, Lock, Calendar, Star, RefreshCw, Eye
} from 'lucide-react';

export const EcommerceShowcaseModal: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<number>(1);
  const [cartCount, setCartCount] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('Mobiles');
  const [priceRange, setPriceRange] = useState<number>(200000);
  const [orderStatus, setOrderStatus] = useState<'Ordered' | 'Shipped' | 'Delivered'>('Ordered');

  const screens = [
    { id: 1, title: '1. Homepage & Banner', tag: 'Storefront', desc: 'Flipkart Plus header with product categories, search bar & Grand Gadget Days promotion banner.' },
    { id: 2, title: '2. Catalog & Price Filters', tag: 'Filtering', desc: 'Interactive filter sidebar with price range slider (₹0 - ₹200,000) and product grid featuring CMF Nothing 1.' },
    { id: 3, title: '3. Product Detail View', tag: 'Product Page', desc: 'Product specs, bank offers (15% discount), warranty details, stock status & direct Add to Cart / Buy Now CTAs.' },
    { id: 4, title: '4. Delivery Address Step', tag: 'Checkout', desc: 'Multi-step address form pre-filled with Vicky Kumar\'s Bhopal delivery address and live price summary.' },
    { id: 5, title: '5. Profile & Accounts', tag: 'User Portal', desc: 'Personal info management, email/phone verification, saved addresses, and payment options.' },
    { id: 6, title: '6. Admin Analytics', tag: 'Admin Dashboard', desc: 'Real-time sales dashboard showing Total Sales ₹0, Orders 0, Products 1, Users 2, and sales growth charts.' },
    { id: 7, title: '7. Stripe Sandbox', tag: 'FinTech', desc: 'Stripe test environment verifying live USD balances ($273.79), webhooks, and payment intents.' },
    { id: 8, title: '8. Payment Options Form', tag: 'Checkout', desc: 'Secure credit/debit card form with live validation and ₹18,000 instant purchase button.' },
    { id: 9, title: '9. Completed Summary', tag: 'Checkout Flow', desc: 'Progressive accordion steps confirming Login ✓, Delivery Address ✓, Order Summary ✓, and Payment.' },
    { id: 10, title: '10. Cart View', tag: 'Shopping Cart', desc: 'Persistent shopping cart manager with price savings calculation and empty state handling.' },
    { id: 11, title: '11. Orders & Tracking', tag: 'Order Lifecycle', desc: 'Order tracking timeline (Ordered Fri 07 Aug -> Shipped -> Delivered) with status updates.' }
  ];

  return (
    <div className="bg-[#0b0f19] border border-white/10 rounded-2xl overflow-hidden shadow-2xl text-slate-100 font-sans">
      {/* Top Header Controls / Screen Selector */}
      <div className="p-4 bg-slate-900 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
            FK
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              Flipkart Plus E-Commerce System
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-mono border border-blue-500/30">
                11 Project Screens
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              {screens.find(s => s.id === activeScreen)?.desc}
            </p>
          </div>
        </div>

        {/* Navigation Quick Arrows */}
        <div className="flex items-center gap-1.5 self-end md:self-auto">
          <button
            onClick={() => setActiveScreen(prev => Math.max(1, prev - 1))}
            disabled={activeScreen === 1}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs text-slate-200 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-cyan-400 px-2 font-bold">
            {activeScreen} / {screens.length}
          </span>
          <button
            onClick={() => setActiveScreen(prev => Math.min(screens.length, prev + 1))}
            disabled={activeScreen === screens.length}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs text-slate-200 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Screen Selection Pills Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto p-2.5 bg-slate-950/80 border-b border-slate-800 scrollbar-none">
        {screens.map((scr) => (
          <button
            key={scr.id}
            onClick={() => setActiveScreen(scr.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeScreen === scr.id
                ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-mono opacity-80">{scr.id}.</span>
            <span>{scr.tag}</span>
          </button>
        ))}
      </div>

      {/* SCREEN RENDER CANVAS */}
      <div className="p-4 sm:p-6 bg-[#020617] min-h-[480px]">
        {/* COMMON FLIPKART PLUS TOP APP BAR REPLICA */}
        <div className="mb-4 bg-[#2874f0] text-white px-4 py-2.5 rounded-xl flex items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex flex-col italic leading-none">
              <span className="font-black text-sm tracking-tight text-white flex items-center gap-1">
                Flipkart <span className="text-yellow-300 font-extrabold italic text-xs">Plus</span>
              </span>
            </div>
            <div className="relative hidden sm:block w-64 md:w-80">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full pl-3 pr-8 py-1 rounded-sm text-xs text-slate-800 bg-white focus:outline-none shadow-inner"
              />
              <Search className="w-3.5 h-3.5 text-blue-600 absolute right-2.5 top-2" />
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hover:text-yellow-200 cursor-pointer flex items-center gap-1">
              Vicky <span className="text-[10px]">▼</span>
            </span>
            <span className="hover:text-yellow-200 cursor-pointer hidden sm:inline">More ▼</span>
            <button 
              onClick={() => setActiveScreen(10)}
              className="flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span className="bg-amber-400 text-slate-950 font-bold px-1.5 py-0.2 rounded-full text-[10px]">
                {cartCount}
              </span>
              <span>Cart</span>
            </button>
          </div>
        </div>

        {/* SCREEN 1: HOMEPAGE & BANNER */}
        {activeScreen === 1 && (
          <div className="space-y-4 animate-fadeIn">
            {/* Category Quicklinks Row */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-2 overflow-x-auto text-center text-[11px]">
              {[
                { name: 'Mobiles', icon: '📱' },
                { name: 'Fashion', icon: '👕' },
                { name: 'Electronics', icon: '💻' },
                { name: 'Home', icon: '🛋️' },
                { name: 'Travel', icon: '✈️' },
                { name: 'Appliances', icon: '📺' },
                { name: 'Furniture', icon: '🪑' },
                { name: 'Beauty & Toys', icon: '🧴' },
                { name: 'Grocery', icon: '🛒' }
              ].map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setActiveScreen(2);
                  }}
                  className="flex flex-col items-center gap-1 p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-slate-300 font-medium">{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Grand Gadget Days Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-950 border border-purple-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-3 max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] tracking-wider uppercase">
                  ⚡ THE GRAND GADGET DAYS (12th-16th FEB)
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  The Grand Gadget Days Are Here! <br />
                  <span className="text-yellow-300">Up to 80% Off</span>
                </h3>
                <p className="text-xs text-indigo-200">
                  Electronics & Accessories | 3Cr+ Products | 10,000+ Brands | GST Invoice Available
                </p>
                <button
                  onClick={() => setActiveScreen(2)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  Shop Grand Gadgets <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-indigo-400/30 text-center w-full md:w-64 shrink-0">
                <div className="text-3xl mb-2">📱🎧💻</div>
                <span className="text-xs font-bold text-white block">CMF Nothing 1</span>
                <span className="text-xs text-emerald-400 font-bold">Special Price: ₹18,000</span>
                <button
                  onClick={() => setActiveScreen(3)}
                  className="mt-3 w-full py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer"
                >
                  View Featured Offer
                </button>
              </div>
            </div>

            {/* Discounts Section Header */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">Discounts for You</h4>
                <p className="text-xs text-slate-400">Handpicked top deals on smartphones & tech</p>
              </div>
              <button
                onClick={() => setActiveScreen(2)}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer"
              >
                VIEW ALL
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 2: CATALOG & PRICE FILTERS */}
        {activeScreen === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 animate-fadeIn">
            {/* Sidebar Filters */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Filters</span>
                <button 
                  onClick={() => setPriceRange(200000)}
                  className="text-[10px] text-blue-400 hover:underline font-semibold cursor-pointer"
                >
                  CLEAR ALL
                </button>
              </div>

              {/* Price Range Slider */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300 block">PRICE RANGE</label>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="5000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>₹0</span>
                  <span className="text-cyan-400 font-bold">Max: ₹{priceRange.toLocaleString()}</span>
                  <span>₹200,000</span>
                </div>
              </div>

              {/* Categories Checkboxes */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <label className="text-[11px] font-bold text-slate-300 block">CATEGORIES</label>
                {['Electronics', 'Mobiles', 'Laptops', 'Fashion', 'Appliances', 'Home'].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer hover:text-white">
                    <input
                      type="radio"
                      name="catFilter"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="accent-blue-500"
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-xs font-bold text-white">Showing Products in {selectedCategory}</span>
                <span className="text-xs text-slate-400 font-mono">1 Item Found</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div 
                  onClick={() => setActiveScreen(3)}
                  className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-blue-500 transition-all cursor-pointer group relative flex flex-col justify-between"
                >
                  <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center p-4 mb-3 relative overflow-hidden">
                    <div className="w-24 h-40 bg-slate-800 border-2 border-slate-600 rounded-2xl flex flex-col items-center justify-center relative p-2 shadow-inner">
                      <div className="w-8 h-1.5 bg-slate-700 rounded-full mb-2" />
                      <div className="w-5 h-5 rounded-full border-2 border-slate-500 bg-slate-900 mb-2" />
                      <span className="text-[8px] font-mono text-slate-400">CMF</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      CMF Nothing 1
                    </h5>
                    <div className="flex items-center gap-2 my-1">
                      <span className="px-1.5 py-0.5 bg-emerald-600 text-white font-bold text-[10px] rounded flex items-center gap-0.5">
                        0.0 ★
                      </span>
                      <span className="text-[10px] text-slate-400">(0 Ratings)</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-base font-extrabold text-white">₹18,000</span>
                      <span className="text-xs text-slate-500 line-through">₹19,000</span>
                      <span className="text-xs font-bold text-emerald-400">5% off</span>
                    </div>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveScreen(3);
                    }}
                    className="mt-3 w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center cursor-pointer"
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: PRODUCT DETAIL VIEW */}
        {activeScreen === 3 && (
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {/* Left Product Image & Buy Buttons */}
            <div className="space-y-4">
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 flex items-center justify-center relative min-h-[300px]">
                <div className="w-36 h-64 bg-slate-900 border-2 border-slate-700 rounded-3xl flex flex-col items-center justify-center relative p-3 shadow-2xl">
                  <div className="w-12 h-2 bg-slate-700 rounded-full mb-4" />
                  <div className="w-8 h-8 rounded-full border-2 border-slate-600 bg-slate-950 mb-4" />
                  <span className="text-xs font-bold text-slate-400 font-mono">cmf</span>
                  <span className="text-[10px] text-slate-600">BY NOTHING</span>
                </div>
                <span className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-red-400 cursor-pointer">
                  ❤️
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setCartCount(1);
                    setActiveScreen(4);
                  }}
                  className="py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <ShoppingCart className="w-4 h-4" /> GO TO CART
                </button>
                <button
                  onClick={() => setActiveScreen(4)}
                  className="py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  ⚡ BUY NOW
                </button>
              </div>
            </div>

            {/* Right Product Specs & Offers */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">CMF Nothing 1</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 bg-emerald-600 text-white font-bold text-xs rounded">
                    0 ★
                  </span>
                  <span className="text-xs text-slate-400">0 Reviews</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-xs font-bold text-emerald-400 block">Special Price</span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-2xl font-black text-white">₹18,000</span>
                  <span className="text-sm text-slate-500 line-through">₹19,000</span>
                  <span className="text-xs font-bold text-emerald-400">5% off</span>
                </div>
                <span className="text-xs font-bold text-red-400 block mt-1 animate-pulse">
                  Hurry, Only 1 left!
                </span>
              </div>

              {/* Bank Offers */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase">Available offers</h4>
                {[1, 2, 3].map((off) => (
                  <div key={off} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400 font-bold">🏷️</span>
                    <span>
                      <strong className="text-white">Bank Offer</strong> 15% Instant discount on first Flipkart Pay Later order of 500 and above <a href="#tc" className="text-blue-400 underline ml-1">T&C</a>
                    </span>
                  </div>
                ))}
              </div>

              {/* Warranty & Delivery */}
              <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Warranty:</span>
                  <span className="text-white font-medium">1 Year Warranty <a href="#know" className="text-blue-400 underline">Know More</a></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Delivery:</span>
                  <span className="text-emerald-400 font-bold">Delivery by Fri, 14 Aug</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Highlights:</span>
                  <span className="text-white">Most Used Phone</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: DELIVERY ADDRESS STEP */}
        {activeScreen === 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fadeIn">
            <div className="lg:col-span-2 space-y-3">
              {/* Toast message simulation */}
              <div className="p-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 shadow-md">
                <CheckCircle2 className="w-4 h-4" /> Product Added To Cart
              </div>

              {/* Accordion Step 1: LOGIN */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-slate-800 text-blue-400 font-bold text-xs flex items-center justify-center">1</span>
                  <div>
                    <span className="text-xs font-bold text-slate-300">LOGIN</span>
                    <p className="text-xs text-white font-semibold">Vicky Kumar <span className="text-slate-400 font-normal">vickykr7051@gmail.com</span></p>
                  </div>
                </div>
                <Check className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Accordion Step 2: DELIVERY ADDRESS FORM */}
              <div className="bg-slate-900 p-5 rounded-xl border-2 border-blue-600 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
                  <span className="w-6 h-6 rounded bg-blue-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                  <span className="text-sm font-bold text-white">DELIVERY ADDRESS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-slate-400">Address *</label>
                    <input
                      type="text"
                      readOnly
                      value="B123 Mahakali Society Trilanga Bhopal"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-medium focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-400">Pincode *</label>
                    <input
                      type="text"
                      readOnly
                      value="462039"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-400">Phone No *</label>
                    <input
                      type="text"
                      readOnly
                      value="8292200151"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-400">City *</label>
                    <input
                      type="text"
                      readOnly
                      value="Bhopal"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-400">State *</label>
                    <input
                      type="text"
                      readOnly
                      value="Madhya Pradesh"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setActiveScreen(8)}
                  className="px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
                >
                  SAVE AND DELIVER HERE
                </button>
              </div>
            </div>

            {/* Price Details Sidebar */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3 h-fit">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                PRICE DETAILS
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Price (1 item)</span>
                  <span className="font-mono text-white">₹19,000</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Discount</span>
                  <span className="font-mono text-emerald-400">- ₹1,000</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Delivery Charges</span>
                  <span className="font-mono text-emerald-400">FREE</span>
                </div>
                <div className="pt-3 border-t border-slate-800 flex justify-between text-sm font-extrabold text-white">
                  <span>Total Amount</span>
                  <span className="font-mono text-cyan-400">₹18,000</span>
                </div>
                <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[11px] text-center border border-emerald-500/20">
                  You will save ₹1,000 on this order
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: USER PROFILE & ACCOUNT SETTINGS */}
        {activeScreen === 5 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
            {/* Account Sidebar Navigation */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                  VK
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Hello,</span>
                  <h4 className="text-sm font-bold text-white">Vicky Kumar</h4>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <div className="p-2.5 rounded-lg bg-blue-600 text-white font-bold cursor-pointer flex items-center justify-between">
                  <span>ACCOUNT SETTINGS</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
                <div className="pl-4 py-1 text-slate-300 font-medium hover:text-white cursor-pointer">Profile Information</div>
                <div className="pl-4 py-1 text-slate-400 hover:text-white cursor-pointer">Manage Addresses</div>
                <div className="pl-4 py-1 text-slate-400 hover:text-white cursor-pointer">PAN Card Information</div>
                <div className="pt-2 p-2.5 text-slate-300 font-bold hover:text-white cursor-pointer">PAYMENTS</div>
                <div className="pl-4 py-1 text-slate-400 hover:text-white cursor-pointer">Gift Cards (₹0)</div>
                <div className="pl-4 py-1 text-slate-400 hover:text-white cursor-pointer">Saved UPI</div>
              </div>
            </div>

            {/* Personal Information Form */}
            <div className="md:col-span-2 bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-sm font-bold text-white">Personal Information</h4>
                <button className="text-xs text-blue-400 hover:underline font-bold cursor-pointer">Edit</button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-400">First Name</label>
                  <input type="text" readOnly value="Vicky" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white" />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400">Last Name</label>
                  <input type="text" readOnly value="Kumar" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white" />
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <label className="text-slate-400 block">Your Gender</label>
                <div className="flex gap-4 text-white">
                  <label className="flex items-center gap-1.5"><input type="radio" checked readOnly className="accent-blue-500" /> Male</label>
                  <label className="flex items-center gap-1.5"><input type="radio" readOnly className="accent-blue-500" /> Female</label>
                </div>
              </div>

              <div className="space-y-1 text-xs pt-2 border-t border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-slate-400">Email Address</label>
                  <span className="text-blue-400 text-[10px] cursor-pointer">Change Password</span>
                </div>
                <input type="email" readOnly value="vickykr7051@gmail.com" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono" />
              </div>

              <div className="space-y-1 text-xs">
                <label className="text-slate-400">Mobile Number</label>
                <input type="text" readOnly value="+91-8292200151" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono" />
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 6: ADMIN ANALYTICS DASHBOARD */}
        {activeScreen === 6 && (
          <div className="space-y-4 animate-fadeIn">
            {/* Top Stat KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-purple-600/20 border border-purple-500/40 p-4 rounded-xl">
                <span className="text-[11px] font-bold text-purple-300 uppercase block">Total Sales Amount</span>
                <div className="text-2xl font-black text-white mt-1">₹0</div>
              </div>
              <div className="bg-rose-600/20 border border-rose-500/40 p-4 rounded-xl">
                <span className="text-[11px] font-bold text-rose-300 uppercase block">Total Orders</span>
                <div className="text-2xl font-black text-white mt-1">0</div>
              </div>
              <div className="bg-amber-600/20 border border-amber-500/40 p-4 rounded-xl">
                <span className="text-[11px] font-bold text-amber-300 uppercase block">Total Products</span>
                <div className="text-2xl font-black text-white mt-1">1</div>
              </div>
              <div className="bg-emerald-600/20 border border-emerald-500/40 p-4 rounded-xl">
                <span className="text-[11px] font-bold text-emerald-300 uppercase block">Total Users</span>
                <div className="text-2xl font-black text-white mt-1">2</div>
              </div>
            </div>

            {/* Analytics Chart & Order Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sales Analytics Overview</h4>
                  <span className="text-[10px] font-mono text-cyan-400">2024 - 2026 Trend</span>
                </div>
                <div className="h-44 bg-slate-950 rounded-lg border border-slate-800 p-4 flex items-end justify-between gap-2 text-[10px] font-mono text-slate-500">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                    <div key={m} className="flex flex-col items-center gap-1 w-full">
                      <div className="w-full bg-blue-600/40 hover:bg-blue-500 rounded-t h-12 transition-all" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-white uppercase border-b border-slate-800 pb-2">ORDER STATUS</h4>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-400 font-bold flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Processing</span>
                    <span className="font-mono text-white font-bold">1</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-amber-400 font-bold flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Shipped</span>
                    <span className="font-mono text-white font-bold">0</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Delivered</span>
                    <span className="font-mono text-white font-bold">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 7: STRIPE SANDBOX */}
        {activeScreen === 7 && (
          <div className="bg-[#0f172a] p-5 rounded-xl border border-indigo-500/30 space-y-4 animate-fadeIn">
            <div className="p-3 bg-indigo-950/80 border border-indigo-500/50 rounded-lg flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-mono font-bold text-[10px]">
                  Sandbox Mode
                </span>
                <span className="text-slate-300">Testing Stripe payment functionality for Flipkart Plus</span>
              </div>
              <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] rounded cursor-pointer">
                Verify Business
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 font-mono block">Gross Volume</span>
                <div className="text-2xl font-black text-white mt-1">$0.00</div>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 font-mono block">USD Balance Available</span>
                <div className="text-2xl font-black text-emerald-400 mt-1">$273.79</div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 8: PAYMENT OPTIONS CARD FORM */}
        {activeScreen === 8 && (
          <div className="max-w-xl mx-auto bg-slate-900 p-6 rounded-2xl border-2 border-blue-600 space-y-4 animate-fadeIn shadow-2xl">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-sm flex items-center justify-center">4</span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">PAYMENT OPTIONS</h4>
            </div>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300">Card Number</label>
                <input
                  type="text"
                  readOnly
                  value="1234 1234 1234 1234"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white font-mono text-sm tracking-widest focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300">MM / YY</label>
                  <input
                    type="text"
                    readOnly
                    value="08 / 28"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300">CVC</label>
                  <input
                    type="password"
                    readOnly
                    value="•••"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>

              <button
                onClick={() => setActiveScreen(11)}
                className="mt-4 w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-sm tracking-wider uppercase shadow-xl transition-all cursor-pointer"
              >
                PAY ₹18,000
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 9: COMPLETED CHECKOUT SUMMARY */}
        {activeScreen === 9 && (
          <div className="space-y-3 animate-fadeIn max-w-2xl mx-auto">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="font-bold text-white">1. LOGIN ✓</span>
              <span className="text-slate-400">Vicky Kumar (vickykr7051@gmail.com)</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="font-bold text-white">2. DELIVERY ADDRESS ✓</span>
              <span className="text-slate-400 truncate max-w-xs">B123 Mahakali Society Trilanga Bhopal, MP - 462039</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="font-bold text-white">3. ORDER SUMMARY ✓</span>
              <span className="text-slate-400">1 Item (CMF Nothing 1)</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border-2 border-blue-600 text-xs text-white font-bold">
              4. PAYMENT OPTIONS (Active)
            </div>
          </div>
        )}

        {/* SCREEN 10: SHOPPING CART VIEW */}
        {activeScreen === 10 && (
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center max-w-lg mx-auto space-y-4 animate-fadeIn">
            <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center mx-auto text-3xl">
              🛒
            </div>
            <h4 className="text-lg font-bold text-white">Your cart is empty!</h4>
            <p className="text-xs text-slate-400">Add items to it now to view checkout summary.</p>
            <button
              onClick={() => setActiveScreen(2)}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        )}

        {/* SCREEN 11: MY ORDERS & ORDER TRACKING TIMELINE */}
        {activeScreen === 11 && (
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h4 className="text-sm font-bold text-white">Order Details & Delivery Status</h4>
              <span className="text-xs font-mono text-emerald-400 font-bold">Order ID: #FK_889210</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-semibold">Delivery Address</span>
                <span className="text-white font-bold block">Vicky Kumar</span>
                <p className="text-slate-300">B123 Mahakali Society Trilanga Bhopal, MP - 462039</p>
                <p className="text-slate-400">Phone: 8292200151</p>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-semibold">Purchased Product</span>
                <span className="text-white font-bold block">CMF Nothing 1</span>
                <p className="text-slate-300">Quantity: 1</p>
                <p className="text-cyan-400 font-mono font-bold">Total: ₹18,000</p>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-semibold">Order Date</span>
                <p className="text-white font-mono">Fri, 07 Aug 2026</p>
                <p className="text-emerald-400 font-bold">Seller has processed your order</p>
              </div>
            </div>

            {/* Live Progress Timeline */}
            <div className="pt-4 border-t border-slate-800">
              <h5 className="text-xs font-bold text-slate-300 mb-4 uppercase tracking-wider text-center">
                Order Delivery Tracker Timeline
              </h5>

              <div className="flex items-center justify-between max-w-xl mx-auto relative px-6">
                <div className="absolute top-3 left-12 right-12 h-1 bg-slate-800 -z-0" />
                <div className="absolute top-3 left-12 w-1/3 h-1 bg-emerald-500 -z-0" />

                <div className="flex flex-col items-center gap-1.5 z-10">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-bold shadow-md">✓</span>
                  <span className="text-[11px] font-bold text-emerald-400">Ordered</span>
                  <span className="text-[9px] font-mono text-slate-400">Fri, 07 Aug 2026</span>
                </div>

                <div className="flex flex-col items-center gap-1.5 z-10">
                  <span className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-600 text-slate-400 flex items-center justify-center text-xs">2</span>
                  <span className="text-[11px] font-medium text-slate-400">Shipped</span>
                  <span className="text-[9px] font-mono text-slate-500">Expected Soon</span>
                </div>

                <div className="flex flex-col items-center gap-1.5 z-10">
                  <span className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-600 text-slate-400 flex items-center justify-center text-xs">3</span>
                  <span className="text-[11px] font-medium text-slate-400">Delivered</span>
                  <span className="text-[9px] font-mono text-slate-500">Fri, 14 Aug</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
