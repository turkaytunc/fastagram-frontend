const DisplayError = ({ message, color = 'red' }: { message: string; color?: string }) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        width: '100%',
        borderRadius: '3px',
        textAlign: 'center',
        textShadow: '1px 1px 1px #222',
        color: 'white',
        fontSize: '1.2rem',
      }}
    >
      {message}
    </div>
  );
};

DisplayError.defaultProps = { color: 'red' };

export default DisplayError;
