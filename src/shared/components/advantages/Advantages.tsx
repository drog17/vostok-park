// "use client";

// import { motion } from "framer-motion";
// import styles from "./advantages.module.scss";
// import { advantages } from "@/shared/mocks/lang/AdvanatgesMocks";
// import { useLanguage } from "@/features/context/LanguageContext";


// export default function AdvantagesSection() {
//   const {lang}=useLanguage()
//   return (
//     <section id="1" className={styles.section}>
//       <motion.h2
//         className={styles.title}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}>
//         {lang==="ru"?"Наши преимущества":"Биздин артыкчылыктар"}
//       </motion.h2>
//       <div className={styles.content}>
//         {advantages.map((item, i) => (
//           <motion.div
//             key={i}
//             className={styles.card}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.15 }}>
//             <div className={styles.icon}>{item.icon}</div>
//             <div>
//               <h3 className={styles.cardTitle}>{item.title}</h3>
//               <p className={styles.desc}>{item.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import styles from "./advantages.module.scss";
import { advantages } from "@/shared/mocks/lang/AdvanatgesMocks";
import { useLanguage } from "@/features/context/LanguageContext";

export default function AdvantagesSection() {
  const { lang } = useLanguage();
  return (
    <section id="1" className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        {lang === "ru" ? "Наши преимущества" : "Биздин артыкчылыктар"}
      </motion.h2>
      <div className={styles.content}>
        {advantages.map((item, i) => {
          const data = lang === "ru" ? item.ru : item.kgz;
          return (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <div>
                <h3 className={styles.cardTitle}>{data.title}</h3>
                <p className={styles.desc}>{data.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
