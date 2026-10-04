type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string };

export default function FormField({ label, id, ...props }: Props) {
  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="mt-2 h-13 w-full rounded-xl border border-gray-200 px-5 text-sm outline-none placeholder:text-gray-400 focus:border-primary"
      />
    </div>
  );
}
