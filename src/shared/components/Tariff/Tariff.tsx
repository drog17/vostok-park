"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./tariff.module.scss";
import { useLanguage } from "@/features/context/LanguageContext";
import { tariffs } from "@/shared/mocks/tariffs/Tariffs";

export default function TariffSection() {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(3);
  const [swiper, setSwiper] = useState<any>(null);

  const handleTariffClick = (index: number) => {
    if (swiper) {
      swiper.slideToLoop(index); 
      setActiveIndex(index);
    }
  };

  return (
    <section id="2" className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        {lang === "ru"
          ? "Выбирайте и подключайте удобный тариф для работы"
          : "Иштөө үчүн ыңгайлуу тарифти тандап, туташтырыңыз"}
      </motion.h2>
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className={styles.swiper}
      >
        {tariffs.map((tariff) => (
          <SwiperSlide key={tariff.id}>
            <motion.div
              className={styles.slide}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={tariff.img}
                  alt={tariff.name}
                  width={800}
                  height={400}
                  className={styles.image}
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.tariffs}>
        {tariffs.map((item, i) => (
          <button
            key={item.id}
            onClick={() => handleTariffClick(i)}
            className={`${styles.tariff} ${
              activeIndex === i ? styles.active : ""
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link href="#form" className={styles.button}>
          {lang === "ru" ? "Оставить заявку" : "Өтүнмө калтырыңыз"}
        </Link>
      </motion.div>
    </section>
  );
}
