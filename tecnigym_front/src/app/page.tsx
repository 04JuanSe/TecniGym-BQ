'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirige automáticamente al cargar la página
    router.replace('./Inicio');
  }, [router]);

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>Redirigiendo a la página de inicio...</h2>
    </div>
  );
}
