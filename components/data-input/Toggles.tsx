const Toggles = () => {
  return (
    <>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input type="checkbox" className="toggle toggle-primary" checked />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input type="checkbox" className="toggle toggle-secondary" checked />
        </label>
      </div>
      <input type="checkbox" className="toggle toggle-xs" checked />
      <input type="checkbox" className="toggle toggle-sm" checked />
      <input type="checkbox" className="toggle toggle-md" checked />
      <input type="checkbox" className="toggle toggle-lg" checked />
    </>
  );
};

export default Toggles;
