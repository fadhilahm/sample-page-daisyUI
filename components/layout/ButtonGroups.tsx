const ButtonGroups = () => {
  return (
    <>
      <div className="btn-group">
        <button className="btn btn-active">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
      </div>
      <div className="btn-group">
        <input type="radio" name="options" data-title="1" className="btn" />
        <input
          type="radio"
          name="options"
          data-title="2"
          className="btn"
          checked
        />
        <input type="radio" name="options" data-title="3" className="btn" />
        <input type="radio" name="options" data-title="4" className="btn" />
      </div>
    </>
  );
};

export default ButtonGroups;
