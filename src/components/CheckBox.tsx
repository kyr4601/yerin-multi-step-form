type CheckBoxProps = {
  list: string;
  isChecked: boolean;
  onChange: () => void;
};

const CheckBox = ({ list, isChecked, onChange }: CheckBoxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        id={list}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={list}>{list}</label>
    </div>
  );
};

export default CheckBox;
