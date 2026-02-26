type AlertProps = {
  message: string;
};

export default function Alert({ message }: AlertProps) {
  return (
    <div
      className="p-4 mb-4 text-sm text-fg-brand-strong rounded-base bg-brand-softer"
      role="alert"
    >
      <span className="font-medium">Info alert! </span>
      {message}
    </div>
  );
}