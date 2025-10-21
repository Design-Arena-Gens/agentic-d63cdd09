'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (service && date && time) {
      router.push(`/confirmation?service=${service}&date=${date}&time=${time}`);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Book a Haircut</h1>
        <p className={styles.description}>
          Choose your service, date, and time.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="service">Service</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="men-haircut">Men&apos;s Haircut ($40)</option>
              <option value="women-haircut">Women&apos;s Haircut ($60)</option>
              <option value="beard-trim">Beard Trim ($20)</option>
              <option value="kids-haircut">Kid&apos;s Haircut ($30)</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Book Appointment
          </button>
        </form>
      </div>
    </main>
  );
}