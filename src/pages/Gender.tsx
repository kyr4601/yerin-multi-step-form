import { useState } from 'react';
import s from '../styles.module.css';
import Button from '../components/Button';

const Gender = () => {
  const [isChecked, setIsChecked] = useState('male');

  function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.value);
  }

  return (
    <section className={s.container}>
      <h1>성별을 선택해주세요</h1>
      <div>
        <label>
          <input
            type="radio"
            value={'male'}
            checked={isChecked === 'male'}
            onChange={handleClick}
          />
          남자
        </label>
        <label>
          <input
            type="radio"
            value={'female'}
            checked={isChecked === 'female'}
            onChange={handleClick}
          />
          여자
        </label>
      </div>
      <div className={s.btnContainer}>
        <Button type={'prev'}>이전</Button>
        <Button type={'next'}>다음</Button>
      </div>
    </section>
  );
};

export default Gender;
