'use client';
import { Ptag } from '@/components';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <Ptag>Что-то пошло не так</Ptag>
      <Ptag> {error.message}</Ptag>
      <Ptag> {JSON.stringify(error)}</Ptag>
      <button
        type="button"
        onClick={() => reset()}
      >
        Ещё раз
      </button>
    </div>
  );
}
