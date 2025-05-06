import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section 
        className="w-full px-4 py-20 md:py-6 flex flex-col md:flex-row items-end gap-0 text-white rounded-[40px] sm:rounded-[60px] md:rounded-[100px] overflow-hidden relative"
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
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10 w-full relative z-10">
          <div className="flex flex-col md:flex-row gap-0 md:items-end">
            <div className="w-full md:w-1/2 space-y-6 p-4 sm:p-6 md:p-8 md:pl-0 md:-ml-12 md:pt-12 md:pb-12" style={{ marginTop: '10px' }}>
              <span 
                className="inline-block bg-white text-[#1F3238] absolute"
                style={{
                  top: '16px',
                  fontFamily: 'Onest, sans-serif',
                  fontWeight: 500,
                  fontSize: '10px',
                  lineHeight: '120%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}
              >
                ПАРТНЕРАМ
              </span>
              <h1 
                className="text-[28px] sm:text-[36px] md:text-[46px] font-normal"
                style={{ 
                  fontFamily: 'Steppe, sans-serif',
                  textShadow: '0 0 8px rgba(255, 255, 255, 0.7)', 
                  marginBottom: '40px',
                  letterSpacing: '-0.04em',
                  lineHeight: '110%',
                  paddingTop: '8px'
                }}
              >
                Выгодные партнерские программы ИгРай
              </h1>
              <div className="w-full sm:max-w-[500px] md:w-[622px]">
                <p 
                  className="font-onest text-[14px] sm:text-[16px] md:text-[20px] leading-[1.4] text-[#FFFFFF] whitespace-pre-line"
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
            <div className="block sm:hidden mt-6 w-full max-w-[300px] mx-auto">
              <Image
                src="/images/partners/women-nice.png"
                alt="Девушка"
                width={300}
                height={420}
                className="w-full h-auto object-cover"
                style={{ transform: 'rotate(-4.55deg)' }}
              />
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
      
      <section className="w-full px-4 py-12 md:py-12 mt-6 sm:mt-8 flex flex-col items-center gap-6 bg-white text-blue-600 rounded-[20px] sm:rounded-[40px] md:rounded-[100px] shadow-md overflow-hidden" style={{ position: 'relative', boxSizing: 'border-box' }}>
        <div className="container mx-auto max-w-[1500px] px-4 sm:px-6 md:px-12 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 md:gap-20">
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[590px] flex justify-center">
              <Image
                src="/images/partners/controller.png"
                alt="Изображение контроллера"
                width={590}
                height={396}
                className="rounded-lg object-contain rounded-[40px] sm:rounded-[60px] md:rounded-[100px] w-full"
                style={{ maxWidth: '100%' }}
              />
            </div>

            <div className="w-full space-y-4 sm:space-y-6 md:space-y-8">
              <h2 
                className="text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[110%] tracking-[-0.04em] text-[#4FCA9C]"
                style={{ fontFamily: 'Steppe, sans-serif' }}
              >
                Специальные цены
              </h2>
              <h2 
                className="text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[110%] tracking-[-0.04em] text-[#1F3238]"
                style={{ 
                  fontFamily: 'Steppe, sans-serif',
                  marginTop: '3px'
                }}
              >
                на оптовые заказы игр
              </h2>
              <p className="font-onest font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[140%] tracking-[0%] text-[#1F3238] mb-4">
                Мы создаем Telegram группу с вами, через которую вы можете приобретать все наши товары по спец прайсу.
              </p>
              <p className="font-onest font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[140%] tracking-[0%] text-[#1F3238]">
                Подойдет если вы ищете надежного и быстрого поставщика или хотите увеличить свой ассортимент.
              </p>

              <button
                className="font-onest font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[120%] tracking-[0%] text-[#1F3238] 
                          flex items-center justify-center whitespace-nowrap
                          border border-[#66D8AD] rounded-[12px] sm:rounded-[16px] md:rounded-[18px] 
                          hover:bg-[#66D8AD] hover:text-white transition-colors duration-300
                          cursor-pointer"
                style={{
                  width: '220px',
                  height: '40px',
                  padding: '0 16px',
                  marginTop: '16px',
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