const variants = {
  violet: 'border-0 bg-brand-violet px-5 hover:bg-brand-pink',
  pink: 'border border-brand-pink bg-brand-pink px-[15px] hover:border-white hover:bg-brand-violet',
}

const Button = ({ variant = 'violet', className = '', children, ...props }) => (
  <button
    type="button"
    className={`cursor-pointer rounded-soft py-[10px] text-white transition-all duration-300 ease-in-out ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
