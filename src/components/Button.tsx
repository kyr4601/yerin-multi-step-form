import { useLocation, useNavigate } from 'react-router';
import s from '../styles.module.css';
import { ReactNode } from 'react';

type BtnProps = {
  type: string;
  children: ReactNode;
  isDisabled?: boolean;
};

const pages = ['/', '/name', '/gender', '/job', '/hobby', '/summary'];

const Button = ({ type, children, isDisabled = false }: BtnProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  function moveNextPage() {
    const currentPage = pages.indexOf(location.pathname);

    if (currentPage === pages.length - 1) {
      alert('제출이 완료되었어요!');
      navigate('/');
    } else {
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
    <button className={s.button} onClick={handleClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
