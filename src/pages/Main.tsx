import { useNavigate } from 'react-router';
import s from '../styles.module.css';

const Main = () => {
  const navigate = useNavigate();

  function handleNextBtn() {
    navigate('/name');
  }

  return (
    <div className={s.container}>
      <button onClick={handleNextBtn}>작성하기</button>
    </div>
  );
};

export default Main;
