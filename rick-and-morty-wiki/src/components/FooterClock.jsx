import { useEffect, useState } from 'react';


export default function FooterClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-clock">
      {time.toLocaleTimeString()}{" "}
      {time.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })}
    </footer>
  );
}
