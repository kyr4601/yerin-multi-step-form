import { useNavigate } from 'react-router';
import s from '../styles.module.css';

const Main = () => {
  const navigate = useNavigate();

  function handleNextBtn() {
    navigate('/name');
  }

  return (
    <section className={s.container}>
      <h1>시작!</h1>
      <button onClick={handleNextBtn}>작성하기</button>
    </section>
  );
};

export default Main;
