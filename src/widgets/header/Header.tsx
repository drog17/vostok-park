// "use client";
// import styles from "./header.module.scss";
// import ParkLogo from '@public/icons/Логотип.png'
// import YandexLogo from '@public/icons/Логотип Яндекс.png'
// import Image from "next/image";
// import { useLanguage } from "@/features/context/LanguageContext";
// import { HeaderTrans } from "@/shared/mocks/lang/headerKgz";

// export default function Header() {
//   const { lang, setLang } = useLanguage();
//   const t = HeaderTrans[lang];

//   return (
//     <header className={styles.header}>
//       <div className={styles.container}>
//         <div className={styles.content}>
//           <div className={styles.logo}>
//             <Image src={ParkLogo} alt="" />
//             <Image src={YandexLogo} alt="" />
//           </div>
//           <div className={styles.nav}>
//             <ul>
//               <a href="#1"><li>{t.advantages}</li></a>
//               <a href="#2"><li>{t.tarif}</li></a>
//               <a href="#3"><li>{t.cash}</li></a>
//               <a href="#4"><li>{t.contacts}</li></a>
//             </ul>
//           </div>
//           <span className={styles.contacts}>+996(223)810-104</span>
//           <nav className={styles.btns}>
//             <button
//               className={`${styles.langBtn} ${lang === "ru" ? styles.active : ""}`}
//               onClick={() => setLang("ru")}>
//               RU
//             </button>
//             <span className={styles.divider}>|</span>
//             <button
//               className={`${styles.langBtn} ${lang === "kgz" ? styles.active : ""}`}
//               onClick={() => setLang("kgz")}>
//               KR
//             </button>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
import { useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import ParkLogo from "@public/icons/Логотип.png";
import YandexLogo from "@public/icons/Логотип Яндекс.png";
import { useLanguage } from "@/features/context/LanguageContext";
import { HeaderTrans } from "@/shared/mocks/lang/headerKgz";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = HeaderTrans[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src={ParkLogo} alt="Park" />
            <Image src={YandexLogo} alt="Yandex" />
          </div>
          <div
            className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            <ul>
              <li><a href="#1">{t.advantages}</a></li>
              <li><a href="#2">{t.tarif}</a></li>
              <li><a href="#3">{t.cash}</a></li>
              <li><a href="#4">{t.contacts}</a></li>
            </ul>
            <div className={styles.mobileExtras}>
              <span className={styles.contacts}>+996(223)810-104</span>
              <div className={styles.btns}>
                <button
                  className={`${styles.langBtn} ${lang === "ru" ? styles.active : ""}`}
                  onClick={() => setLang("ru")}
                >
                  RU
                </button>
                <span className={styles.divider}>|</span>
                <button
                  className={`${styles.langBtn} ${lang === "kgz" ? styles.active : ""}`}
                  onClick={() => setLang("kgz")}
                >
                  KR
                </button>
              </div>
            </div>
          </nav>
          <div className={styles.rightSide}>
            <span className={styles.contacts}>+996(223)810-104</span>
            <div className={styles.btns}>
              <button
                className={`${styles.langBtn} ${lang === "ru" ? styles.active : ""}`}
                onClick={() => setLang("ru")}
              >
                RU
              </button>
              <span className={styles.divider}>|</span>
              <button
                className={`${styles.langBtn} ${lang === "kgz" ? styles.active : ""}`}
                onClick={() => setLang("kgz")}
              >
                KR
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
