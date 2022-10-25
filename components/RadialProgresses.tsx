const RadialProgresses = () => {
  return (
    <>
      <div className="radial-progress" style={{ "--value": 0 }}>
        0%
      </div>
      <div className="radial-progress" style={{ "--value": 20 }}>
        20%
      </div>
      <div className="radial-progress" style={{ "--value": 60 }}>
        60%
      </div>
      <div className="radial-progress" style={{ "--value": 80 }}>
        80%
      </div>
      <div className="radial-progress" style={{ "--value": 100 }}>
        100%
      </div>
      <div
        className="radial-progress bg-primary text-primary-content border-4 border-primary"
        style={{ "--value": 70 }}
      >
        70%
      </div>
    </>
  );
};

export default RadialProgresses;
