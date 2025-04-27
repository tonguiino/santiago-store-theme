import React, { useEffect, useState } from 'react';

interface ContadorProps {
    dateCountDown: string;
    userEmail?: string;
}

const Contador = ({ dateCountDown, userEmail }: ContadorProps) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const target = new Date(dateCountDown).getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference <= 0) {
                setTimeLeft("0 días 00:00:00");
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft(
                `${days} días ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
            );
        };

        const interval = setInterval(updateCountdown, 1000);

        updateCountdown(); // primer render inmediato

        return () => clearInterval(interval);
    }, [dateCountDown]);

    return (
        <p className="text-white font-bold text-center py-2">
            {userEmail
                ? `${userEmail} quedan ${timeLeft} para que el envío de tu primera compra sea gratuito`
                : `Quedan ${timeLeft} para aprovechar esta oferta`}
        </p>
    );
};

export default Contador;
