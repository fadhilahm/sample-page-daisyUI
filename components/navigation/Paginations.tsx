const Paginations = () => {
  return (
    <>
      <div className="btn-group">
        <button className="btn btn-xs">1</button>
        <button className="btn btn-xs btn-active">2</button>
        <button className="btn btn-xs">3</button>
        <button className="btn btn-xs">4</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-sm">1</button>
        <button className="btn btn-sm btn-active">2</button>
        <button className="btn btn-sm">3</button>
        <button className="btn btn-sm">4</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-md">1</button>
        <button className="btn btn-md btn-active">2</button>
        <button className="btn btn-md">3</button>
        <button className="btn btn-md">4</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-lg">1</button>
        <button className="btn btn-lg btn-active">2</button>
        <button className="btn btn-lg">3</button>
        <button className="btn btn-lg">4</button>
      </div>
    </>
  );
};

export default Paginations;
