import s from '../styles.module.css';
import Button from '../components/Button';

const Main = () => {
  return (
    <main className={s.container}>
      <h1>시작!</h1>
      <Button type={'next'}>작성하기</Button>
    </main>
  );
};

export default Main;
