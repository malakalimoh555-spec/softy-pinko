import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import rocket from '../assets/images/work-process-item-01.png'
import bg from '../assets/images/work-process-bg.png'

const steps = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: 'Get Ideas',
  text: 'Godard pasbst parism fam cliche.',
}))

const Work = () => (
  <section
    id="work"
    className="my-[55px] bg-cover bg-center bg-no-repeat px-[50px] py-[100px] text-center"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <Container>
      <SectionTitle
        light
        narrow
        title="Work Process"
        text="Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam."
      />
      <div className="mt-12 grid gap-[30px] md:grid-cols-3 lg:grid-cols-6">
        {steps.map(({ id, title, text }) => (
          <div
            key={id}
            className="group relative cursor-pointer rounded-soft bg-white p-5 shadow-[0_2px_48px_0_rgb(0_0_0/8%)] transition-all duration-300 ease-in-out after:absolute after:inset-x-0 after:-bottom-2.5 after:h-full after:rounded-soft after:bg-white after:opacity-15 hover:-translate-y-[15px]"
          >
            <img src={rocket} alt="" className="mx-auto" />
            <h5 className="py-[10px] text-xl font-medium transition-all duration-300 ease-in-out group-hover:text-brand-pink">
              {title}
            </h5>
            <p className="text-txt transition-all duration-300 ease-in-out group-hover:text-ink">
              {text}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
)

export default Work
