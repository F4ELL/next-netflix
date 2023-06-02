import { AlertCircle, Play } from 'lucide-react'

import Image from 'next/image'

export function Banner() {
  function truncate(string: string, n: number) {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string
  }

  return (
    <div className="w-full h-[850px] min-h-[850px] bg-cover bg-[url(https://occ-0-396-1567.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTJYxybuiG75hMhxyCmKfVAH8AX892HtX3O-UrgreVqQyhijbVeGIQz6JLZ5ErgrWGB1YoMpXwjIJuZM3fmHAsCr9ubGFRWB21OZ.webp?r=6c4)] bg-center">
      <div className="w-full h-full flex flex-col justify-center px-16">
        <h1 className="text-6xl font-bold mb-4 text-shadow-lg">Movie Name</h1>

        <div className="flex items-center space-x-2">
          <Image src="/top10.svg" alt="" width={32} height={32} />

          <p className="text-2xl text-shadow-xl font-semibold mb-3">
            Top 2 em séries hoje
          </p>
        </div>

        <p className="max-w-[545px] text-lg text-shadow-lg mb-3">
          {truncate(
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores veniam laborum minima voluptatibus placeat magni ad amet possimus ab repellendus? Aliquam laudantium suscipit quisquam magnam. Quasi enim accusamus repellendus ipsam.',
            150,
          )}
        </p>
        <div className="flex space-x-3">
          <button className="px-6 py-2 bg-white text-black font-bold text-lg rounded-md flex gap-2 items-center hover:bg-[#ffffffbf]">
            <Play className="" />
            Assistir
          </button>

          <button className="px-6 py-2 bg-[#6D6D6EB3] text-white font-bold text-lg rounded-md flex gap-2 items-center hover:bg-[#6d6d6e66] transition-colors">
            <AlertCircle />
            Mais informações
          </button>
        </div>
      </div>
    </div>
  )
}
