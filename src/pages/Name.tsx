import Button from '../components/Button';
import s from '../styles.module.css';

const Name = () => {
  return (
    <div className={s.container}>
      <h1>이름을 입력해주세요</h1>
      <input type="text" />
      <div className={s.btnContainer}>
        <Button type={'prev'}>이전</Button>
        <Button type={'next'}>다음</Button>
      </div>
    </div>
  );
};

export default Name;
