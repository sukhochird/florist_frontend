import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section Removed */}

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="flex flex-col items-start mb-3">
                 <Image 
                   src="/logo.png" 
                   alt="Elite Flower" 
                   width={120}
                   height={40}
                   className="h-10 w-auto object-contain brightness-0 invert opacity-90 mb-2" 
                 />
              </div>
              <p className="text-white/70 text-sm">
                Таны сэтгэлийн үгсийг цэцгээр илэрхийлнэ. Хамгийн тансаг, шинэлэг цэцгийн баглааг бид бэлтгэнэ.
              </p>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/eliteflower_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-black transition-colors"
              >
                <Instagram className="size-5" />
              </a>
              <a 
                href="https://www.facebook.com/EliteFlowerShop" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-black transition-colors"
              >
                <Facebook className="size-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-black transition-colors">
                <Youtube className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h4 className="font-semibold mb-4">Дэлгүүр</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">Коллекци</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Букетүүд</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Цэцэг</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Сарна��</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Бэлэг</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Ургамал</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Хадгалалт</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="hidden md:block">
            <h4 className="font-semibold mb-4">Үйлчлүүлэгчдэд</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">Хүргэлтийн мэдээлэл</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Төлбөрийн нөхцөл</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Буцаах бодлого</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Түгээмэл асуулт</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Холбоо барих</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Бидний тухай</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Үйлчилгээний нөхцөл</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Холбоо барих</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 mt-0.5 text-accent" />
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-white">Салбар 1:</span><br/> 
                    10-р хорооллын туслах зам дагуу Elite flower цэцэгсийн дэлгүүр
                  </p>
                  <p>
                    <span className="font-semibold text-white">Салбар 2:</span><br/> 
                    🏢Grand Plaza Office, 1-р давхар Elite Premium Flower Shop
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-5 shrink-0 mt-0.5 text-accent" />
                <div className="flex flex-col gap-1">
                  <a href="tel:90915955" className="hover:text-accent transition-colors">
                    9091-5955
                  </a>
                  <a href="tel:90915595" className="hover:text-accent transition-colors">
                    9091-5595
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-white/10 rounded-lg border border-white/10">
              <p className="text-xs text-accent font-bold uppercase mb-1">Цагийн хуваарь</p>
              <p className="text-sm font-medium">Өдөр бүр 09:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-white/70 flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start">
              <span>© 2026 Elite Flower. Бүх эрх хуулиар хамгаалагдсан.</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/70">Төлбөрийн аргууд:</span>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 bg-white rounded text-xs font-semibold text-black">QPay</div>
                <div className="px-3 py-1.5 bg-white rounded text-xs font-semibold text-black">SocialPay</div>
                <div className="px-3 py-1.5 bg-white rounded text-xs font-semibold text-black">Card</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
