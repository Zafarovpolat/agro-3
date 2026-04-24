import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Search, 
  Heart, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Truck, 
  ShieldCheck, 
  Settings, 
  Award,
  ArrowRight,
  Facebook,
  Instagram,
  Send,
  Tractor,
  Wheat,
  Wrench,
  Package,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  power: string;
  engine: string;
  drive: string;
  isFavorite?: boolean;
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "John Deere 6175M",
    category: "Универсальный трактор",
    image: "https://picsum.photos/seed/tractor1/600/400",
    power: "175 л.с.",
    engine: "Дизель 6.8L",
    drive: "Полный привод"
  },
  {
    id: 2,
    name: "Case IH Axial-Flow 8250",
    category: "Зерноуборочный комбайн",
    image: "https://picsum.photos/seed/combine1/600/400",
    power: "480 л.с.",
    engine: "Дизель 12.9L",
    drive: "Передний привод"
  },
  {
    id: 3,
    name: "New Holland T7.270",
    category: "Тяжелый трактор",
    image: "https://picsum.photos/seed/tractor2/600/400",
    power: "270 л.с.",
    engine: "Дизель 6.7L",
    drive: "Полный привод"
  },
  {
    id: 4,
    name: "Claas Lexion 8700",
    category: "Гибридный комбайн",
    image: "https://picsum.photos/seed/combine2/600/400",
    power: "544 л.с.",
    engine: "Дизель 15.6L",
    drive: "Полный привод"
  }
];

const CATEGORIES = [
  { name: "Тракторы", count: 45, icon: <Tractor className="w-8 h-8" /> },
  { name: "Комбайны", count: 23, icon: <Wheat className="w-8 h-8" /> },
  { name: "Оборудование", count: 67, icon: <Settings className="w-8 h-8" /> },
  { name: "Запчасти", count: "200+", icon: <Wrench className="w-8 h-8" /> },
  { name: "Сервис", count: "24/7", icon: <ShieldCheck className="w-8 h-8" /> },
  { name: "Прицепы", count: 12, icon: <Package className="w-8 h-8" /> },
];

const REVIEWS = [
  {
    id: 1,
    text: "Купили комбайн через этот сайт. Все быстро и профессионально. Рекомендую!",
    author: "Иван Петров",
    company: "ООО 'Золотое поле'",
    region: "Краснодарский край",
    rating: 5
  },
  {
    id: 2,
    text: "Отличный сервис и качественная техника. Помогли с выбором и доставкой.",
    author: "Сергей Николаев",
    company: "КФХ 'Рассвет'",
    region: "Ростовская область",
    rating: 5
  }
];

// --- Components ---

const TopBar = () => (
  <div className="bg-primary text-white py-2 px-4 hidden md:block">
    <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
      <div className="flex gap-6">
        <a href="tel:+78001234567" className="flex items-center gap-2 hover:text-accent transition-colors">
          <Phone size={14} /> +7 (800) 123-45-67
        </a>
        <a href="mailto:info@agro.ru" className="flex items-center gap-2 hover:text-accent transition-colors">
          <Mail size={14} /> info@agro.ru
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Clock size={14} /> Пн-Пт 9:00 - 18:00
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="АГРОТЕХНИКА" className="h-14" />
        </div>

        <nav className="hidden lg:flex items-center gap-8 font-medium text-dark">
          <a href="#" className="hover:text-primary transition-colors">Главная</a>
          <div className="relative group cursor-pointer">
            <span className="flex items-center gap-1 group-hover:text-primary transition-colors">Каталог <ChevronRight size={14} className="rotate-90" /></span>
          </div>
          <a href="#" className="hover:text-primary transition-colors">О нас</a>
          <a href="#" className="hover:text-primary transition-colors">Сервис</a>
          <a href="#" className="hover:text-primary transition-colors">Контакты</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-bg-light rounded-full transition-colors hidden sm:block">
            <Search size={20} className="text-gray-custom" />
          </button>
          <button className="relative p-2 hover:bg-bg-light rounded-full transition-colors">
            <Heart size={20} className="text-gray-custom" />
            <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </button>
          <button 
            className="lg:hidden p-2 hover:bg-bg-light rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="АГРОТЕХНИКА" className="h-10" />
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-lg font-semibold">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Главная</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Каталог</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>О нас</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Сервис</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Контакты</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/agrihero/1920/1080" 
        alt="Agro machinery" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-white"
      >
        <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 leading-tight">
          СОВРЕМЕННАЯ <span className="text-accent">АГРОТЕХНИКА</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 font-medium">
          Профессиональное оборудование для эффективного сельского хозяйства. 
          Повышайте урожайность с надежной техникой.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-accent/40 transform hover:-translate-y-1">
            Смотреть каталог
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
            Консультация
          </button>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
        <ChevronRight className="rotate-90" size={20} />
      </div>
    </div>
  </section>
);

const CategoryGrid = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {CATEGORIES.map((cat, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-bg-light p-8 rounded-2xl text-center group cursor-pointer border border-transparent hover:border-accent transition-all duration-300"
          >
            <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="font-bold text-dark mb-1">{cat.name}</h3>
            <p className="text-xs text-gray-custom font-medium">({cat.count} моделей)</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PopularMachinery = () => (
  <section className="py-20 bg-bg-light">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark mb-4">
          ПОПУЛЯРНАЯ ТЕХНИКА ЭТОГО МЕСЯЦА
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <motion.div 
            key={product.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-custom hover:text-red-500 transition-colors">
                <Heart size={18} />
              </button>
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{product.category}</div>
              <h3 className="text-lg font-bold text-dark mb-4">{product.name}</h3>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-custom font-medium">
                  <Settings size={14} className="text-accent" /> {product.power}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-custom font-medium">
                  <Wrench size={14} className="text-accent" /> {product.engine}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-custom font-medium">
                  <Tractor size={14} className="text-accent" /> {product.drive}
                </div>
              </div>
              
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                Подробнее <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Advantages = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { icon: <Award />, title: "10+ лет на рынке", desc: "С 2014 года помогаем фермерам" },
          { icon: <ShieldCheck />, title: "Гарантия качества", desc: "Официальная гарантия на всю технику" },
          { icon: <Truck />, title: "Быстрая доставка", desc: "По всей России от 3-х дней" },
          { icon: <Settings />, title: "Сервисный центр", desc: "Собственная мастерская и склад запчастей" },
        ].map((adv, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              {React.cloneElement(adv.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">{adv.title}</h3>
            <p className="text-gray-custom font-medium">{adv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-20 bg-bg-light overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark mb-4">КАК МЫ РАБОТАЕМ</h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-accent/30 -translate-y-1/2 z-0" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {[
            { num: "01", title: "Выбираете технику", desc: "Изучаете каталог и добавляете в избранное" },
            { num: "02", title: "Оставляете заявку", desc: "Заполняете простую форму на сайте" },
            { num: "03", title: "Консультация", desc: "Менеджер перезванивает через 10 минут" },
            { num: "04", title: "Получаете технику", desc: "Доставка и запуск оборудования" },
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-primary/30">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
              <p className="text-gray-custom font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 bg-primary relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-dark/20 skew-x-12 translate-x-1/2" />
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center text-white mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6">НУЖНА ПОМОЩЬ В ВЫБОРЕ ТЕХНИКИ?</h2>
        <p className="text-xl text-primary-light font-medium">Оставьте заявку — перезвоним за 10 минут и ответим на все вопросы</p>
      </div>

      <form className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <input 
          type="text" 
          placeholder="Ваше имя" 
          className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-all"
        />
        <input 
          type="tel" 
          placeholder="Телефон" 
          className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-all"
        />
        <select className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white focus:outline-none focus:bg-white/20 transition-all appearance-none cursor-pointer">
          <option className="text-dark">Выберите технику</option>
          <option className="text-dark">Тракторы</option>
          <option className="text-dark">Комбайны</option>
          <option className="text-dark">Оборудование</option>
        </select>
        <button className="bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-black/20 uppercase tracking-wider">
          Отправить
        </button>
      </form>
      
      <p className="text-center text-white/50 text-xs mt-6">
        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
      </p>
    </div>
  </section>
);

const Reviews = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark mb-4">ОТЗЫВЫ КЛИЕНТОВ</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-bg-light p-8 md:p-12 rounded-3xl text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(REVIEWS[activeIdx].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-medium text-dark italic mb-8 leading-relaxed">
                "{REVIEWS[activeIdx].text}"
              </p>
              <div>
                <div className="font-bold text-lg text-dark">{REVIEWS[activeIdx].author}</div>
                <div className="text-primary font-bold">{REVIEWS[activeIdx].company}</div>
                <div className="text-gray-custom text-sm">{REVIEWS[activeIdx].region}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            {REVIEWS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all ${activeIdx === idx ? 'bg-primary w-8' : 'bg-gray-lighter'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-dark text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Tractor size={32} className="text-primary-light" />
            <span className="font-display font-bold text-2xl">АГРОТЕХНИКА</span>
          </div>
          <p className="text-gray-light font-medium mb-8">
            Профессиональное оборудование для сельского хозяйства. Помогаем фермерам расти с 2014 года.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all">
              <Send size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-4">О компании</h4>
          <ul className="space-y-4 text-gray-light font-medium">
            <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-4">Каталог</h4>
          <ul className="space-y-4 text-gray-light font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Тракторы</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Комбайны</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Почвообработка</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Посевная техника</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Запчасти</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-4">Контакты</h4>
          <ul className="space-y-4 text-gray-light font-medium">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-primary-light shrink-0" />
              <div>
                <div className="text-white">+7 (800) 123-45-67</div>
                <div className="text-xs">Бесплатно по России</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-primary-light shrink-0" />
              <div>info@agro.ru</div>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-primary-light shrink-0" />
              <div>Пн-Пт 9:00 - 18:00</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-light font-medium">
        <div>© 2026 АгроТехника. Все права защищены.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <CategoryGrid />
        <PopularMachinery />
        <Advantages />
        <Process />
        <CTASection />
        <Reviews />
      </main>
      <Footer />
      
      {/* Floating WhatsApp/Call for mobile */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
        <button className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
          <Send size={28} />
        </button>
        <button className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center">
          <Phone size={28} />
        </button>
      </div>
    </div>
  );
}
