const Checkboxes = () => {
  return (
    <>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input
            type="checkbox"
            checked
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <input type="checkbox" checked className="checkbox checkbox-xs" />
      <input type="checkbox" checked className="checkbox checkbox-sm" />
      <input type="checkbox" checked className="checkbox checkbox-md" />
      <input type="checkbox" checked className="checkbox checkbox-lg" />
    </>
  );
};

export default Checkboxes;
