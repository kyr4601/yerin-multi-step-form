import { useState } from 'react';
import Button from '../components/Button';
import s from '../styles.module.css';

const Name = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setIsDisabled(e.target.value.length < 1);
  }
  return (
    <section className={s.container}>
      <h1>이름을 입력해주세요</h1>
      <input type="text" onChange={handleInput} />
      <div className={s.btnContainer}>
        <Button type={'prev'}>이전</Button>
        <Button type={'next'} isDisabled={isDisabled}>
          다음
        </Button>
      </div>
    </section>
  );
};

export default Name;
