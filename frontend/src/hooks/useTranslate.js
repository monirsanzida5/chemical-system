import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../App";

export default function useTranslate(lang) {

  const context = useContext(LanguageContext);

  // ✅ SAFE language resolve (FIXED)
  const activeLang = lang || context?.lang || "en";

  const [t, setT] = useState({});

  useEffect(() => {

    let mounted = true;

    import(`../locales/${activeLang}.json`)
      .then(res => {
        if (mounted) setT(res.default);
      })
      .catch(() => {
        import(`../locales/en.json`)
          .then(res => {
            if (mounted) setT(res.default);
          });
      });

    return () => {
      mounted = false;
    };

  }, [activeLang]);

  return t;
}