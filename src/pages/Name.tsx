import { useEffect, useState } from 'react';
import Button from '../components/Button';
import s from '../styles.module.css';

const Name = () => {
  const [name, setName] = useState(() => {
    return localStorage.getItem('name') || '';
  });
  const [isDisabled, setIsDisabled] = useState(name === '');

  useEffect(() => {
    const debouncedInput = setTimeout(() => {
      localStorage.setItem('name', name);
    }, 500);

    return () => clearTimeout(debouncedInput);
  }, [name]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    setIsDisabled(e.target.value.length < 1);
  }

  return (
    <main className={s.container}>
      <h1>이름을 입력해주세요</h1>
      <input type="text" value={name} onChange={handleInput} />
      <div className={s.btnContainer}>
        <Button type={'prev'}>이전</Button>
        <Button type={'next'} isDisabled={isDisabled}>
          다음
        </Button>
      </div>
    </main>
  );
};

export default Name;
