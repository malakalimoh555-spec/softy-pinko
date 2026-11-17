const SectionTitle = ({ title, text, light = false, narrow = false, className = '' }) => (
  <div className={`text-center ${light ? 'text-white' : 'text-ink'} ${className}`}>
    <h3 className="text-[1.75rem] font-medium">{title}</h3>
    <p
      className={`mx-auto mt-6 w-full ${narrow ? 'md:w-2/5' : 'md:w-3/5'} ${light ? '' : 'text-txt'}`}
    >
      {text}
    </p>
  </div>
)

export default SectionTitle
