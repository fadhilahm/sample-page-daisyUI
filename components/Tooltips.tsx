const Tooltips = () => {
  return (
    <>
      <div className="tooltip" data-tip="hello">
        <button className="btn">Hover me</button>
      </div>
      <div className="tooltip tooltip-success" data-tip="success">
        <button className="btn btn-success">success</button>
      </div>
      <div className="tooltip tooltip-warning" data-tip="warning">
        <button className="btn btn-warning">warning</button>
      </div>
      <div className="tooltip tooltip-error" data-tip="error">
        <button className="btn btn-error">error</button>
      </div>
    </>
  );
};

export default Tooltips;
