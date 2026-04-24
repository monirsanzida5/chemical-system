import { useEffect, useState, useContext } from "react"; // ✅ ADD useContext
import { LanguageContext } from "../App"; // ✅ ADD

export default function useTranslate(lang) {

  // ✅ NEW: global lang from context
  const context = useContext(LanguageContext);

  // ✅ যদি lang না পাঠানো হয় → context থেকে নিবে
  const activeLang = lang || context?.lang || "en";

  const [t, setT] = useState({});

  useEffect(() => {

    import(`../locales/${activeLang}.json`)
      .then(res => setT(res.default))
      .catch(() => import(`../locales/en.json`)
      .then(res => setT(res.default)));

  }, [activeLang]); // ✅ CHANGE

  return t;
}