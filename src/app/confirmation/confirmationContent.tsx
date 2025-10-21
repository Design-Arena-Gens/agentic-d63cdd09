'use client';

import { useSearchParams } from 'next/navigation';
import styles from '../page.module.css';
import Link from 'next/link';

export default function ConfirmationContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service');
  const date = searchParams.get('date');
  const time = searchParams.get('time');

  const services: { [key: string]: string } = {
    'men-haircut': "Men's Haircut",
    'women-haircut': "Women's Haircut",
    'beard-trim': 'Beard Trim',
    'kids-haircut': "Kid's Haircut",
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Appointment Confirmed!</h1>
        <div className={styles.details}>
          <p>
            <strong>Service:</strong> {service ? services[service] : ''}
          </p>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>
        </div>
        <Link href="/" className={styles.button}>
          Book Another Appointment
        </Link>
      </div>
    </main>
  );
}
