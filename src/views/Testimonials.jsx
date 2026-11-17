import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import icon from '../assets/images/testimonial-icon.png'

const items = [
  {
    name: 'Catherine Soft',
    role: 'Managing Director',
    text: 'Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.',
  },
  {
    name: 'Kelvin Wood',
    role: 'Digital Marketer',
    text: 'Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.',
  },
  {
    name: 'David Martin',
    role: 'Website Manager',
    text: 'Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.',
  },
]

const Testimonials = () => (
  <section id="testi" className="my-12 text-center">
    <Container>
      <SectionTitle
        title="What do they say?"
        text="Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero."
      />
      <div className="mt-12 grid gap-[30px] sm:grid-cols-2 md:grid-cols-3">
        {items.map(({ name, role, text }) => (
          <div
            key={name}
            className="group cursor-pointer rounded-soft bg-white px-[15px] py-[25px] shadow-soft transition-all duration-300 ease-in-out"
          >
            <img src={icon} alt="" className="mx-auto" />
            <p className="py-[25px] text-left text-txt transition-all duration-300 ease-in-out group-hover:text-ink">
              {text}
            </p>
            <div className="transition-all duration-300 ease-in-out group-hover:translate-x-[15px]">
              <h5 className="text-xl font-medium">{name}</h5>
              <p className="text-brand-pink">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
)

export default Testimonials
