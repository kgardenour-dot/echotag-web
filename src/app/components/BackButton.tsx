'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  
  return (
    <button
      onClick={() => router.back()}
      className="text-sm text-warmOffWhite/80 hover:text-honeyGold transition underline underline-offset-4"
    >
      ← Back
    </button>
  );
}

