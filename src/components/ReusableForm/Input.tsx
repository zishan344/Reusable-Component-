export const Input = ({ ID, label, register, errors, types }) => {
  return (
    <div className="w-full max-w-md">
      <label className="block" htmlFor={ID}>
        {label}
      </label>
      <input id={ID} type={types} {...register(label)} />
      {errors.email && (
        <span className="text-red-500 text-xs">{errors.email.message}</span>
      )}
    </div>
  );
};
