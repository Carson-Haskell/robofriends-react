const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '600px',
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
