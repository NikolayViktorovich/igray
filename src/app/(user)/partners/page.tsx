import Image from 'next/image';

export default function HomePage() {
  return (
<main className="min-h-screen">
 <section 
  className="w-full px-4 py-10 sm:py-20 md:py-6 flex flex-col md:flex-row items-start md:items-end gap-0 text-white rounded-[40px] sm:rounded-[100px] md:rounded-[100px] overflow-hidden relative"
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
    }}
  />
  
  <div className="container mx-auto max-w-7xl md:px-10 w-full relative z-10">
    <div className="flex flex-col md:flex-row gap-0 md:items-end">
      <div className="md:w-1/2 space-y-6 p-4 sm:p-8 w-full pl-4 sm:pl-0 -ml-4 sm:-ml-12 pt-4 sm:pt-8 pb-12" style={{ marginTop: '10px' }}>
        <span 
          className="inline-block bg-white text-[#1F3238] absolute"
          style={{
            top: '-10px sm:-10px md:24px',
            left: '16px sm:16px md:unset',
            fontFamily: 'Onest, sans-serif',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '120%',
            letterSpacing: '0%',
            textAlign: 'center',
            textTransform: 'uppercase',
            padding: '2px 8px',
            borderRadius: '6px',
            position: 'relative',
            zIndex: 20
          }}
        >
          ПАРТНЕРАМ
        </span>
        <h1 
          className="text-3xl sm:text-4xl md:text-[46px] font-normal pl-4 sm:pl-0"
          style={{ 
            fontFamily: 'Steppe, sans-serif',
            textShadow: '0 0 8px rgba(255, 255, 255, 0.7)', 
            marginBottom: '40px sm:mb-[60px]',
            letterSpacing: '-0.04em',
            lineHeight: '110%',
            paddingTop: '8px'
          }}
        >
          Выгодные партнерские программы ИгРай
        </h1>
        <div className="w-full sm:w-[622px] md:w-[622px] pl-4 sm:pl-0">
          <p 
            className="font-onest text-base sm:text-lg md:text-xl leading-[1.4] text-[#FFFFFF] whitespace-pre-line"
            style={{
              fontWeight: 100,
              letterSpacing: '0%',
              fontFamily: 'Onest, sans-serif',
            }}
          >
            ИгРай предлагает своим партнерам более выгодные коммерческие условия, совместный маркетинг и безграничные возможности: предоставляя вам ресурсы для развития вашего бизнеса, меньше проблем, больше прибыли!
          </p>
        </div>
      </div>
      <div className="hidden md:block md:absolute md:top-[4%] md:left-[58%] z-0 w-[50vw] max-w-[348px]">
        <Image
          src="/images/partners/women-nice.png"
          alt="Девушка"
          width={600}
          height={840}
          className="w-full h-auto object-cover"
          style={{ transform: 'rotate(-4.55deg)' }}
        />
      </div>
      <div className="hidden md:block md:absolute md:top-[-25px] md:left-[750px] z-[-1] w-[50vw] max-w-[614px]">
        <Image
          src="/images/partners/game-controll.png"
          alt="Игры"
          width={644.45}
          height={597}
          className="object-contain w-full"
        />
      </div>
    </div>
  </div>
</section>
  
  <section className="w-full px-4 py-8 sm:py-12 mt-8 flex flex-col items-center gap-4 sm:gap-6 bg-white text-blue-600 rounded-[20px] sm:rounded-[100px] md:rounded-[100px] shadow-md overflow-hidden" style={{ position: 'relative', boxSizing: 'border-box' }}>
    <div className="container mx-auto max-w-[1500px] px-4 md:px-12 w-full">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-20 md:flex-row">
        <div className="w-full max-w-[300px] sm:max-w-[590px] flex justify-center">
          <Image
            src="/images/partners/controller.png"
            alt="Изображение контроллера"
            width={590}
            height={396}
            className="rounded-lg object-contain rounded-[40px] sm:rounded-[100px] w-full"
            style={{ maxWidth: '100%' }}
          />
        </div>

        <div className="w-full space-y-4 sm:space-y-6 md:space-y-8">
          <h2 
            className="text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-[110%] tracking-[-0.04em] text-[#4FCA9C]"
            style={{ fontFamily: 'Steppe, sans-serif' }}
          >
            Специальные цены
          </h2>
          <h2 
            className="text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-[110%] tracking-[-0.04em] text-[#1F3238]"
            style={{ 
              fontFamily: 'Steppe, sans-serif',
              marginTop: '3px'
            }}
          >
            на оптовые заказы игр
          </h2>
          <p className="font-onest font-normal text-sm sm:text-base md:text-lg leading-[140%] tracking-[0%] text-[#1F3238] mb-4">
            Мы создаем Telegram группу с вами, через которую<br /> вы можете приобретать все наши товары по спец прайсу.
          </p>
          <p className="font-onest font-normal text-sm sm:text-base md:text-lg leading-[140%] tracking-[0%] text-[#1F3238]">
            Подходит если вы ищете надежного и быстрого<br /> поставщика или хотите увеличить свой ассортимент.
          </p>

          <button
            className="font-onest font-medium text-sm sm:text-base md:text-lg leading-[120%] tracking-[0%] text-[#1F3238] 
                      flex items-center justify-center whitespace-nowrap w-full sm:w-[245px]
                      border border-[#66D8AD] rounded-[18px] 
                      hover:bg-[#66D8AD] hover:text-white transition-colors duration-300
                      cursor-pointer"
            style={{
              height: '48px',
              padding: '0 20px',
              marginTop: '16px sm:mt-20',
              marginBottom: '0'
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