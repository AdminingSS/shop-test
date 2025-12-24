import { useEffect } from 'react';

import { useCartStore } from '../controllers/useCartStore';

export const useSyncTabs = () => {
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'shopping-cart-storage') {
        useCartStore.persist.rehydrate();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
};