import { useState } from 'react';
import Button from '../components/Button';
import s from '../styles.module.css';

const Summary = () => {
  const [inputCount, setInputCount] = useState(0);

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputCount(e.target.value.length);
  }

  return (
    <section className={s.container}>
      <h1>자기소개를 해주세요</h1>
      <div>
        <textarea
          maxLength={99}
          placeholder="간단한 자기소개를 입력해주세요"
          onChange={handleInput}
          rows={10}
          cols={30}
        />
        <p>{inputCount}/100</p>
      </div>
      <div className={s.btnContainer}>
        <Button type={'prev'}>이전</Button>
        <Button type={'next'}>완료</Button>
      </div>
    </section>
  );
};

export default Summary;
