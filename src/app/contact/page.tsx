'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Холбоо барих
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-500"
          >
            <Link href="/" className="hover:text-accent">Нүүр</Link>
            <span>/</span>
            <span>Холбоо барих</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-12 md:mt-20">
        
        {/* Branches Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {/* Branch 1 */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
                <div className="h-64 overflow-hidden relative">
                    <img 
                        src="https://images.unsplash.com/photo-1624924224849-5338c9416756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBzaG9wJTIwc3RvcmUlMjBmcm9udCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTY2OTc5OHww&ixlib=rb-4.1.0&q=80&w=1080" 
                        alt="Branch 1 Exterior" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                        Салбар 1
                    </div>
                </div>
                <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-serif font-bold">10-р хороолол</h3>
                    
                    <div className="space-y-4 text-gray-600">
                        <div className="flex items-start gap-3">
                            <MapPin className="size-5 text-accent shrink-0 mt-1" />
                            <p className="leading-relaxed">
                                10-р хорооллын туслах зам дагуу Elite flower цэцэгсийн дэлгүүр
                            </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <Phone className="size-5 text-accent shrink-0 mt-1" />
                            <div className="flex flex-col">
                                <a href="tel:90915955" className="hover:text-accent transition-colors">9091-5955</a>
                                <a href="tel:90915595" className="hover:text-accent transition-colors">9091-5595</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Clock className="size-5 text-accent shrink-0 mt-1" />
                            <p>09:00 - 21:00 (Өдөр бүр)</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Branch 2 */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
                <div className="h-64 overflow-hidden relative">
                    <img 
                        src="https://images.unsplash.com/photo-1769501203611-8fdaa2373826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBzaG9wJTIwYm91dGlxdWUlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3Njk2Njk3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                        alt="Branch 2 Interior" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                        Салбар 2
                    </div>
                </div>
                <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-serif font-bold">Grand Plaza</h3>
                    
                    <div className="space-y-4 text-gray-600">
                        <div className="flex items-start gap-3">
                            <MapPin className="size-5 text-accent shrink-0 mt-1" />
                            <p className="leading-relaxed">
                                Grand Plaza Office, 1-р давхар Elite Premium Flower Shop
                            </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <Phone className="size-5 text-accent shrink-0 mt-1" />
                            <div className="flex flex-col">
                                <a href="tel:90915955" className="hover:text-accent transition-colors">9091-5955</a>
                                <a href="tel:90915595" className="hover:text-accent transition-colors">9091-5595</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Clock className="size-5 text-accent shrink-0 mt-1" />
                            <p>09:00 - 21:00 (Өдөр бүр)</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* General Info */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 mb-20 text-center"
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-full text-accent shadow-sm">
                        <Mail className="size-5" />
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">И-мэйл хаяг</p>
                        <a href="mailto:info@eliteflower.mn" className="font-medium hover:text-accent transition-colors">info@eliteflower.mn</a>
                    </div>
                </div>
                
                <div className="w-px h-10 bg-gray-200 hidden md:block" />

                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-full text-accent shadow-sm">
                        <Phone className="size-5" />
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">Холбоо барих</p>
                        <p className="font-medium">9091-5955, 9091-5595</p>
                    </div>
                </div>
            </div>
        </motion.div>
        
        {/* Map Image Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px] relative bg-gray-100"
        >
             <img 
                src="https://images.unsplash.com/photo-1760282341931-0c1b595a1cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBsb2NhdGlvbiUyMGNpdHklMjBzdHJlZXR8ZW58MXx8fHwxNzY5NjY5NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Map location"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
             />
             <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-sm mb-1">Elite Flower</p>
                <p className="text-xs text-gray-600">Улаанбаатар хот дахь салбарууд</p>
             </div>
        </motion.div>
      </div>
    </div>
  );
}
