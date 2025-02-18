import { useLocation, useNavigate } from 'react-router';
import s from '../styles.module.css';
import { ReactNode } from 'react';

type BtnProps = {
  type: string;
  children: ReactNode;
};

const Button = ({ type, children }: BtnProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pages = ['/', '/name', '/gender', '/job', '/hobby', '/summary'];

  function moveNextPage() {
    const currentPage = pages.indexOf(location.pathname);
    if (currentPage !== -1) {
      navigate(pages[currentPage + 1]);
    }
  }

  function handleClick() {
    if (type === 'prev') {
      navigate(-1);
    } else {
      moveNextPage();
    }
  }

  return (
    <button className={s.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
