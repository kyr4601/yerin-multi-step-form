import { useState } from 'react';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import s from '../styles.module.css';

const hobbies = [
  '운동',
  '독서',
  '요리',
  '게임',
  '여행',
  '음악',
  '영화',
  '기타',
];

const Hobby = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);

  function handleCheck(hobby: string) {
    let newSelected = selected;
    if (selected.includes(hobby)) {
      newSelected = selected.filter((item) => item !== hobby);
    } else if (selected.length < 3) {
      newSelected = [...selected, hobby];
    }

    setSelected(newSelected);
    setIsDisabled(newSelected.length === 0);
  }
  return (
    <section className={s.container}>
      <h1>취미를 선택해주세요(최대 3개)</h1>
      <div className={s.checkContainer}>
        {hobbies.map((hobby) => (
          <CheckBox
            key={hobby}
            list={hobby}
            isChecked={selected.includes(hobby)}
            onChange={() => handleCheck(hobby)}
          />
        ))}
      </div>
      <div className={s.btnContainer}>
        <Button type={'prev'}>이전</Button>
        <Button type={'next'} isDisabled={isDisabled}>
          다음
        </Button>
      </div>
    </section>
  );
};

export default Hobby;
