export const createCountdown = (
  expirationDate: Date,
  onTenSecondsRemaining: () => void
) => {
  let intervalId: NodeJS.Timeout;
  let timeRemaining: number | null = null;

  const calculateTimeRemaining = (): void => {
    const now = new Date();
    const distance = expirationDate.getTime() - now.getTime();

    if (distance <= 0) {
      clearInterval(intervalId);
      timeRemaining = 0;
      return;
    }
    const secondsRemaining = Math.floor(distance / 1000);
    timeRemaining = secondsRemaining;

    const formatearSegundos = (segundos: number) =>
      `${Math.floor(segundos / 60)}:${(segundos % 60).toString().padStart(2, "0")}`;

    const formato = formatearSegundos(timeRemaining);

    if (secondsRemaining === 0) {
      onTenSecondsRemaining();
    }
  };

  const startCountdown = () => {
    calculateTimeRemaining();
    intervalId = setInterval(calculateTimeRemaining, 1000);
  };

  const stopCountdown = () => {
    clearInterval(intervalId);
  };

  startCountdown();

  return stopCountdown;
};

// export default useCountdown;
