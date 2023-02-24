const Notification = ({ message, style }) => {
  if (message) return <div style={style}>{message}</div>;
};

export default Notification;
