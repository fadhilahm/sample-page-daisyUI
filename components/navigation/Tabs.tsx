const Tabs = () => {
  return (
    <>
      <div className="tabs">
        <a className="tab tab-xs tab-lifted">Tiny</a>
        <a className="tab tab-xs tab-lifted tab-active">Tiny</a>
        <a className="tab tab-xs tab-lifted">Tiny</a>
      </div>
      <div className="tabs">
        <a className="tab tab-sm tab-lifted">Small</a>
        <a className="tab tab-sm tab-lifted tab-active">Small</a>
        <a className="tab tab-sm tab-lifted">Small</a>
      </div>
      <div className="tabs">
        <a className="tab tab-lifted">Normal</a>
        <a className="tab tab-lifted tab-active">Normal</a>
        <a className="tab tab-lifted">Normal</a>
      </div>
      <div className="tabs">
        <a className="tab tab-lg tab-lifted">Large</a>
        <a className="tab tab-lg tab-lifted tab-active">Large</a>
        <a className="tab tab-lg tab-lifted">Large</a>
      </div>
    </>
  );
};

export default Tabs;
