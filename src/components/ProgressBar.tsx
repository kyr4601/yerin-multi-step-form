import { useEffect, useState } from 'react';
import s from './../styles.module.css';
import { useLocation } from 'react-router';

const pages = ['/', '/name', '/gender', '/job', '/hobby', '/summary'];

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setStep(pages.indexOf(location.pathname));
    setProgress(pages.indexOf(location.pathname) * 20);
  }, [location.pathname]);

  return (
    <nav className={s.boxContainer}>
      <div
        className={s.bar}
        style={{
          background: `linear-gradient(90deg, blue ${progress}%, white calc(${progress}% + 0.1%))`,
        }}
      >
        <span
          className={s.step}
          style={{
            left: `${progress - 5}%`,
            visibility: progress === 0 ? 'hidden' : 'visible',
          }}
        >
          {step}
        </span>
      </div>
    </nav>
  );
};

export default ProgressBar;
