const RadialProgresses = () => {
  return (
    <>
      <div className="radial-progress" style={{ ["--value" as any]: 0 }}>
        0%
      </div>
      <div className="radial-progress" style={{ ["--value" as any]: 20 }}>
        20%
      </div>
      <div className="radial-progress" style={{ ["--value" as any]: 60 }}>
        60%
      </div>
      <div className="radial-progress" style={{ ["--value" as any]: 80 }}>
        80%
      </div>
      <div className="radial-progress" style={{ ["--value" as any]: 100 }}>
        100%
      </div>
    </>
  );
};

export default RadialProgresses;
