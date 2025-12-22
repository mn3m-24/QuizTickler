type ErrorMessageProps = {
  message: string | null;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;
  return (
    <p role="alert" style={{ color: 'red' }}>
      {message}
    </p>
  );
};
