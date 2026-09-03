import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.replace('#', '') || 'home';

    window.setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 0);
  }, [location.hash]);

  return null;
}

export default ScrollToSection;