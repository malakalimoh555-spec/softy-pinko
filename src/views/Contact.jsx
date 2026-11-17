import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'

const inputClass =
  'w-full rounded-soft border border-[#dee2e6] bg-white p-[10px] outline-none transition-colors focus:border-brand-violet'

const Contact = () => (
  <section id="contact" className="mt-[100px] bg-[rgb(242,242,254)] py-[100px] text-center">
    <Container>
      <SectionTitle
        className="[&_p]:pb-[50px]"
        title="Talk To Us"
        text="Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper."
      />

      <div className="grid gap-8 md:grid-cols-12">
        <div className="text-left md:col-span-4">
          <h3 className="text-[1.75rem] font-medium">Blog Entries</h3>
          <p className="mt-6 text-txt">
            110-220 Quisque diam odio, maximus ac consectetur eu, 10260 auctor non lorem
          </p>
          <p className="mt-6 text-txt">
            You are NOT allowed to re-distribute Softy Pinko template on any template collection
            websites. Thank you.
          </p>
        </div>

        <form className="md:col-span-8" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Full Name" aria-label="Full Name" className={inputClass} />
            <input type="text" placeholder="Full Name" aria-label="Full Name" className={inputClass} />
          </div>
          <textarea
            placeholder="Your Message"
            aria-label="Your Message"
            className={`${inputClass} mb-4 block h-[150px] resize-none p-5`}
          />
          <Button type="submit" className="mx-auto block uppercase md:mr-auto md:ml-0">
            Send Message
          </Button>
        </form>
      </div>
    </Container>
  </section>
)

export default Contact
