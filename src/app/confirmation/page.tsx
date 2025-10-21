import { Suspense } from 'react';
import ConfirmationContent from './confirmationContent';

export default function Confirmation() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}