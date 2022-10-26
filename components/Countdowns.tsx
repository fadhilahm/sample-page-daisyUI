const Countdowns = () => {
  return (
    <>
      <span className="countdown font-mono text-2xl">
        <span style={{ ["--value" as any]: 10 }}></span>:
        <span style={{ ["--value" as any]: 24 }}></span>:
        <span style={{ ["--value" as any]: 46 }}></span>
      </span>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ ["--value" as any]: 15 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ ["--value" as any]: 10 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ ["--value" as any]: 24 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ ["--value" as any]: 4 }}></span>
          </span>
          sec
        </div>
      </div>
    </>
  );
};

export default Countdowns;
