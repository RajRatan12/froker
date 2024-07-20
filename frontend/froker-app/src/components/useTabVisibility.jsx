import { useEffect } from 'react';

const useTabVisibility = () => {
  useEffect(() => {
    const originalTitle = "Froker";
    const messages = ["Don't leave us", "We are still here"];
    let messageIndex = 0;
    let intervalId;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        intervalId = setInterval(() => {
          document.title = messages[messageIndex];
          messageIndex = (messageIndex + 1) % messages.length;
        }, 500); // Change text every 1 second
      } else {
        clearInterval(intervalId);
        document.title = originalTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.title = originalTitle;
    };
  }, []);
};

export default useTabVisibility;
