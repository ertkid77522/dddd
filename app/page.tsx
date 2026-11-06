import Image from "next/image";



export default function Home() {
  return (




    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">



      <header>
        <div className="gap-16 flex items-right text-3xl ">
          <p className="LOGO">BOXPACK</p>
          <nav className="flex gap-10 padding-100 ">
            <p>Услуги</p>
            <p>Как это работает</p>
            <p>Видеофикация</p>
            <p>Калькулятор</p>
            <p>Кейсы</p>
            <p>Контакты</p>
          </nav>
        </div>
      </header>
      <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="text-2xl">Автоматизированный фулфилмент</p>
          <p className="text-6xl flex flex-col">Фулфилмент, который держит сроки и репутацию</p>
          <p className="text-2xl">Автоматизированная упаковка, видеоконтроль каждого заказа и отправка в день поступления. 
            Мы берем на себя хранение, сборку, маркировку и логистику.</p>
            <p className="text-2x1">Рассчитать стоимость</p>
            <Image
              className="dark:invert w-4"
              src="/Right.svg"
              alt="Vercel logomark"
              width={6}
              height={4}
            />
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Jrtq
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="http://localhost:3000/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}