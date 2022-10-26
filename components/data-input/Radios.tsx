const Radios = () => {
  return (
    <>
      <input
        type="radio"
        name="radio-4"
        className="radio radio-accent"
        checked
      />
      <input type="radio" name="radio-4" className="radio radio-accent" />
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Red pill</span>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-red-500"
            checked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">blue pill</span>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-blue-500"
            checked
          />
        </label>
      </div>
    </>
  );
};

export default Radios;
