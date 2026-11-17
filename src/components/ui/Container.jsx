// بديل Container بتاع Bootstrap (نفس الـ max-widths)
const Container = ({ as: Tag = 'div', className = '', children, ...props }) => (
  <Tag
    className={`mx-auto w-full px-3 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] min-[1400px]:max-w-[1320px] ${className}`}
    {...props}
  >
    {children}
  </Tag>
)

export default Container
