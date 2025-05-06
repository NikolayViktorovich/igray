import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section 
  className="w-full px-4 py-12 flex flex-col md:flex-row items-center gap-10 text-white rounded-[100px] overflow-hidden relative"
  style={{
    position: 'relative',
  }}
>
  <div 
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/images/partners/backgr-1.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  />

  <div 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(4px)',
    }}
  />
  
  <div className="container mx-auto max-w-7xl md:px-8 w-full relative z-10">
    <div className="flex flex-col md:flex-row gap-10 items-center">
      <div className="md:w-1/2 space-y-6 p-8 w-full pl-0 -ml-12 relative" style={{ marginTop: '10px' }}>
        <span 
          className="inline-block bg-white text-[#1F3238] absolute"
          style={{
            top: '4px',
            fontFamily: 'Onest, sans-serif',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '120%',
            letterSpacing: '0%',
            textAlign: 'center',
            textTransform: 'uppercase',
            padding: '2px 8px',
            borderRadius: '6px'
          }}
        >
          ПАРТНЕРАМ
        </span>
        <h1 
          className="text-[46px] font-normal"
          style={{ 
            fontFamily: 'Steppe, sans-serif',
            textShadow: '0 0 8px rgba(255, 255, 255, 0.7)', 
            marginBottom: '60px',
            letterSpacing: '-0.04em',
            lineHeight: '110%',
            paddingTop: '8px'
          }}
        >
          Выгодные партнерские программы ИгРай
        </h1>
        <div className="w-[622px] h-[114px]">
          <p className="font-onest font-thin text-[18px] leading-[1.4] text-[#FFFFFF] whitespace-pre-line">
            ИгРай предлагает своим партнерам более выгодные коммерческие условия, совместный маркетинг и безграничные возможности: предоставляя вам ресурсы для развития вашего бизнеса, меньше проблем, больше прибыли!
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src="/banner-image.png"
          alt="Баннерное изображение"
          width={500}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  </div>
</section>
      
      <section className="w-full px-4 py-20 mt-12 flex flex-col md:flex-row items-center gap-10 bg-white text-blue-600 rounded-[100px] shadow-md overflow-hidden">
        <div className="container mx-auto max-w-7xl md:px-8 w-full">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 w-full flex justify-center">
              <Image
                src="/game-controller.png"
                alt="Изображение контроллера"
                width={500}
                height={300}
                className="rounded-lg object-contain"
              />
            </div>

            <div className="md:w-1/2 space-y-6 w-full">
            <h2 
    className="text-[40px] font-extrabold leading-[110%] tracking-[-0.04em] text-[#4FCA9C]"
    style={{ fontFamily: 'Steppe, sans-serif' }}
  >
    Специальные цены
  </h2>
  <h2 
    className="text-[40px] font-extrabold leading-[110%] tracking-[-0.04em] text-[#1F3238]"
    style={{ 
      fontFamily: 'Steppe, sans-serif',
      marginTop: '3px'
    }}
  >
    на оптовые заказы игр
  </h2>
  <p className="font-onest font-normal text-[18px] leading-[140%] tracking-[0%] text-[#1F3238] mb-4">
  Мы создаем Telegram группу с вами, через которую вы можете приобретать все наши товары по спецпрайсу.
</p>
<p className="font-onest font-normal text-[18px] leading-[140%] tracking-[0%] text-[#1F3238]">
  Подойдет если вы ищете надежного и быстрого поставщика или хотите увеличить свой ассортимент.
</p>

<button
  className="font-onest font-medium text-[16px] leading-[120%] tracking-[0%] text-[#1F3238] 
             flex items-center justify-center whitespace-nowrap
             border border-[#66D8AD] rounded-[18px] 
             hover:bg-[#66D8AD] hover:text-white transition-colors duration-300
             cursor-pointer"
  style={{
    width: '245px',
    height: '48px',
    padding: '0 20px'
  }}
>
  Телеграм Канал с Ценами
</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}