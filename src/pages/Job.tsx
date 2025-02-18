import Button from '../components/Button';
import s from '../styles.module.css';

const Job = () => {
  return (
    <section className={s.container}>
      <h1>직군을 선택해주세요</h1>
      <select name="jobs">
        <option value="프론트엔드">프론트엔드</option>
        <option value="백엔드">백엔드</option>
        <option value="iOS">iOS</option>
        <option value="안드로이드">안드로이드</option>
        <option value="Devops">Devops</option>
      </select>
      <div className={s.btnContainer}>
        <Button type={'prev'}>이전</Button>
        <Button type={'next'}>다음</Button>
      </div>
    </section>
  );
};

export default Job;
