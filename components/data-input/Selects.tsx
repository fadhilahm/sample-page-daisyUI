const Selects = () => {
  return (
    <>
      <select className="select w-full max-w-xs">
        <option disabled selected>
          Pick your favorite Simpson
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>

      <select className="select select-bordered select-lg w-full max-w-xs">
        <option disabled selected>
          Large
        </option>
        <option>Large Apple</option>
        <option>Large Orange</option>
        <option>Large Tomato</option>
      </select>
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Normal
        </option>
        <option>Normal Apple</option>
        <option>Normal Orange</option>
        <option>Normal Tomato</option>
      </select>
      <select className="select select-bordered select-sm w-full max-w-xs">
        <option disabled selected>
          Small
        </option>
        <option>Small Apple</option>
        <option>Small Orange</option>
        <option>Small Tomato</option>
      </select>
      <select className="select select-bordered select-xs w-full max-w-xs">
        <option disabled selected>
          Tiny
        </option>
        <option>Tiny Apple</option>
        <option>Tiny Orange</option>
        <option>Tiny Tomato</option>
      </select>
    </>
  );
};

export default Selects;
