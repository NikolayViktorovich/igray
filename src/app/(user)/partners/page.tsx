'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PartnersPage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const maxWidth = 1500;
      const minWidth = 1024;

      if (windowWidth < maxWidth && windowWidth >= minWidth) {
        const shiftRatio = (maxWidth - windowWidth) / 2;
        const maxOffset = 100;
        setOffset(Math.min(shiftRatio, maxOffset));
      } else {
        setOffset(0);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* 🔵 Первая секция (синяя) */}
      <section className="relative bg-blue-900 w-full max-w-[95vw] sm:max-w-[98vw] md:max-w-[1500px] min-h-[473px] rounded-[40px] md:rounded-[100px] overflow-hidden mx-auto px-6 pt-10 pb-20 md:pb-0">
        <div className="absolute inset-0 bg-[url('/images/partners/backgr-2.png')] bg-cover bg-center opacity-100 md:hidden"></div>
        <div className="absolute inset-0 bg-[url('/images/partners/backgr-1.png')] bg-cover bg-center opacity-100 hidden md:block"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative z-10 text-white max-w-[600px] mx-auto md:mx-0 md:ml-12 sm:pt-4 przygotowanie sm:mt-[-20px] pb-[180px] sm:pb-0"
        >
          <span className="inline-block bg-white text-black w-[90px] h-[18px] rounded-[6px] font-onest font-medium text-[12px] leading-[120%] text-center uppercase flex items-center justify-center mt-2 md:mt-6 ml-2 sm:ml-0">
            ПАРТНЕРАМ
          </span>

          <h1
            className="font-steppe font-extrabold text-[32px] sm:text-[36px] md:text-[46px] leading-[110%] tracking-[-0.04em] mt-6 md:mt-8 ml-2 sm:ml-0 sm:mt-2 md:whitespace-normal sm:whitespace-normal sm:block break-words"
            style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
          >
            <span className="block sm:hidden">Выгодные</span>
            <span className="block sm:hidden">партнерские</span>
            <span className="block sm:hidden">программы</span>
            <span className="block sm:hidden">ИгРай</span>
            <span className="hidden sm:inline">Выгодные партнерские программы ИгРай</span>
          </h1>

          <p className="mt-8 md:mt-14 font-light text-[20px] leading-[140%] font-onest ml-2 sm:ml-0 sm:mt-2 sm:font-normal break-words">
            ИгРай предлагает своим партнерам более выгодные коммерческие условия, совместный маркетинг и безграничные возможности: предоставляя вам ресурсы для развития вашего бизнеса, меньше проблем, больше прибыли!
          </p>
        </motion.div>

        {/* 👩 Девушка — только для <640px */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute bottom-[-10%] left-[10%] z-10 max-[639px]:block sm:hidden"
        >
          <img
            src="/images/partners/women-nice.png"
            alt="Woman"
            className="h-[300px] object-contain"
          />
        </motion.div>

        {/* 👩 Девушка — десктоп */}
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/images/partners/women-nice.png"
          alt="Woman"
          style={{
            left: `calc(55% + ${offset}px)`,
            top: '10%', 
          }}
          className="absolute bottom-[-40%] h-[600px] z-20 hidden md:block hide-girl-in-range object-contain transition-all duration-300 ease-out"
        />

        {/* 🎮 Контроллеры на разных разрешениях */}
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          src="/images/partners/game-controll.png"
          alt="Game Controller"
          className="absolute bottom-[-1%] right-[-2%] z-0 h-[250px] object-contain max-[639px]:block sm:hidden md:hidden hide-game-in-range"
        />
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          src="/images/partners/game-controll.png"
          alt="Game Controller"
          className="absolute bottom-[-5%] right-0 z-0 h-[220px] object-contain hidden sm:block max-[641px]:hidden md:hidden hide-game-in-range"
        />
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          src="/images/partners/game-controll.png"
          alt="Game Controller"
          className="absolute bottom-0 left-[55%] h-[550px] z-10 hidden md:block object-contain hide-game-in-range"
        />
      </section>

{/* Белая секция с изображением и текстом */}
{/* Белая секция с изображением и текстом */}
<section className="relative bg-white w-full max-w-[95vw] sm:max-w-[98vw] md:max-w-[95vw] min-h-[520px] rounded-[40px] md:rounded-[100px] overflow-hidden mx-auto mt-10 px-2 sm:px-4 md:px-12 md:flex md:items-center pb-[30px] sm:pb-[60px] md:pb-[30px]">

  <div className="relative flex flex-col md:flex-row md:items-center w-full gap-4 md:gap-8">
    {/* Картинка — мобильная версия */}
    <motion.img
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      src="/images/partners/controller.png"
      alt="Controller"
      className="w-full max-w-[590px] h-auto object-contain mt-[10px] md:hidden"
    />

    {/* Картинка — десктопная версия */}
    <motion.img
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      src="/images/partners/controller.png"
      alt="Controller"
      className="hidden md:block object-contain flex-shrink-0"
      style={{ width: 'clamp(250px, 40vw, 590px)' }}
    />

    {/* Контейнер для заголовков, текстов и кнопки */}
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="mt-12 md:mt-0 flex flex-col w-full max-w-[600px] px-4 sm:px-6 md:px-0 md:ml-12"
>
      {/* Заголовки для разных устройств */}
      <h2 className="block min-[390px]:hidden md:hidden font-steppe font-extrabold leading-[120%] tracking-[-0.04em]" style={{ fontSize: 'clamp(24px, 6vw, 32px)' }}>
        <span className="text-[#4FCA9C] block">Специальные</span>
        <span className="block">
          <span className="text-[#4FCA9C]">цены</span>{' '}
          <span className="text-[#1F3238]">на оптовые заказы игр</span>
        </span>
      </h2>

      <h2 className="hidden min-[390px]:block md:hidden font-steppe font-extrabold leading-[120%] tracking-[-0.04em]" style={{ fontSize: 'clamp(32px, 6vw, 32px)' }}>
        <span className="text-[#4FCA9C] block">Специальные</span>
        <span className="block">
          <span className="text-[#4FCA9C]">цены</span>{' '}
          <span className="text-[#1F3238]">на оптовые заказы игр</span>
        </span>
      </h2>

      <div className="hidden md:block">
        <h2
          className="font-steppe font-extrabold leading-[110%]"
          style={{ fontSize: 'clamp(28px, 4vw, 46px)', color: '#4FCA9C' }}
        >
          Специальные цены
        </h2>
        <h3
          className="font-steppe font-extrabold leading-[110%]"
          style={{ fontSize: 'clamp(28px, 4vw, 46px)', color: '#1F3238' }}
        >
          на оптовые заказы игр
        </h3>
      </div>

      {/* Тексты */}
      <p
        className="mt-6 md:mt-8 font-onest text-[#1F3238] leading-[140%] tracking-[-0%] overflow-wrap break-word"
        style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}
      >
        Мы создаем Телеграм группу с вами, через которую вы можете приобретать все наши товары по спец прайсу.
      </p>
      <p
        className="mt-4 md:mt-6 font-onest text-[#1F3238] leading-[140%] tracking-[-0%] overflow-wrap break-word"
        style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}
      >
        Подойдет если вы ищете надежного и быстрого поставщика или хотите увеличить свой ассортимент.
      </p>

      {/* Кнопка с переходом на Телеграм канал */}
      <a
        href="https://t.me/igrayOPT"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our Telegram channel for pricing"
        className="mt-8 px-6 py-3 border-[0.5px] border-[#66D8AD] text-[#1F3238] font-onest font-medium text-[16px] leading-[120%] tracking-[0%] rounded-[18px] w-[252px] hover:bg-[#66D8AD] hover:text-white hover:border-transparent transition-all duration-300 ease-in-out"
      >
        Телеграм Канал с Ценами
      </a>
    </motion.div>
  </div>
</section>
    </>
  );
}