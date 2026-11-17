import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'

// كل feature: [النص, متاح؟]
const plans = [
  {
    name: 'Starter',
    price: '14.50',
    tone: 'bg-brand-violet',
    features: [
      ['60 GB space', true],
      ['600 GB transfer', true],
      ['Pro Design Panel', true],
      ['15-minute support', false],
      ['Unlimited Emails', false],
      ['24/7 Security', false],
    ],
  },
  {
    name: 'Premium',
    price: '21.50',
    tone: 'bg-brand-pink',
    features: [
      ['120 GB space', true],
      ['1200 GB transfer', true],
      ['Pro Design Panel', true],
      ['15-minute support', true],
      ['Unlimited Emails', false],
      ['24/7 Security', false],
    ],
  },
  {
    name: 'Advanced',
    price: '42.00',
    tone: 'bg-brand-violet',
    features: [
      ['250 GB space', true],
      ['5000 GB transfer', true],
      ['Pro Design Panel', true],
      ['15-minute support', true],
      ['Unlimited Emails', true],
      ['24/7 Security', true],
    ],
  },
]

const Price = () => (
  <section id="price" className="mt-12 bg-soft py-[55px]">
    <Container>
      <SectionTitle
        narrow
        title="Pricing Plans"
        text="Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat."
      />
      <div className="mt-12 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
        {plans.map(({ name, price, tone, features }) => (
          <div
            key={name}
            className="group cursor-pointer rounded-soft bg-white pt-[30px] pb-[40px] text-center shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-[15px]"
          >
            <p>{name}</p>

            <div className={`mx-auto mt-[1px] w-[70%] rounded-soft text-white shadow-soft ${tone}`}>
              <p className="text-xl">
                <span className="text-[25px]">$</span> {price}
              </p>
              <p>
                <small>monthly</small>
              </p>
            </div>

            <div className="py-4">
              {features.map(([text, ok]) => (
                <p key={text}>{ok ? text : <del>{text}</del>}</p>
              ))}
            </div>

            <Button className="group-hover:bg-brand-pink">PURCHASE NOW</Button>
          </div>
        ))}
      </div>
    </Container>
  </section>
)

export default Price
