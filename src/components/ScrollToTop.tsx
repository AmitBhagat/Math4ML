import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Reset window scroll just in case
    window.scrollTo(0, 0);

    // Reset the internal scroll container identified in MainLayout
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as any
      });
    }
  }, [pathname]);

  return null;
}
