'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Hei, jeg er Jan Inge 👋</h1>
            <p className="text-xl mb-4 text-gray-900 dark:text-gray-100">
              Fullstack-utvikler med fokus på C#/.NET og React
            </p>
            <p className="text-xl mb-8 text-gray-900 dark:text-gray-100">
              Fra miljøarbeider til koder - jeg bringer med meg 
              bred erfaring med mennesker og problemløsning inn i teknologiverdenen
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src="/images/jan.inge.jpg"
                alt="Jan Inge Kirsebom Strandman"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}