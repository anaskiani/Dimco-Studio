import { useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Lightbox from './components/Lightbox';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import { categories } from './data/portfolio';

export default function App() {
  // Lightbox state (used on the home page)
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    categoryId: null,
    imageIndex: 0,
    direction: 0,
  });

  const openLightbox = useCallback((categoryId, index) => {
    setLightbox({ isOpen: true, categoryId, imageIndex: index, direction: 0 });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const navigateLightbox = useCallback((dir) => {
    setLightbox((prev) => {
      const category = categories.find((c) => c.id === prev.categoryId);
      if (!category) return prev;
      const total = category.thumbnails.length;
      const newIndex = (prev.imageIndex + dir + total) % total;
      return { ...prev, imageIndex: newIndex, direction: dir };
    });
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage onOpenLightbox={openLightbox} />
              <Lightbox
                isOpen={lightbox.isOpen}
                categoryId={lightbox.categoryId}
                imageIndex={lightbox.imageIndex}
                direction={lightbox.direction}
                onClose={closeLightbox}
                onPrev={() => navigateLightbox(-1)}
                onNext={() => navigateLightbox(1)}
              />
            </>
          }
        />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </HashRouter>
  );
}
