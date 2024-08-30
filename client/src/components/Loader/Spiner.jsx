const Spiner = () => {
  return (
    <>
      <div className="d-flex align-items-center spinner-main">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spiner;
