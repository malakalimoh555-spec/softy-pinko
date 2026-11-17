import Container from '../ui/Container'
import icon from '../../assets/images/featured-item-01.png'

const cards = [
  { title: 'Modern Strategy', text: 'Customize anything in this template to fit your website needs' },
  { title: 'Best Relationship', text: 'Contact us immediately if you have a question in mind' },
  { title: 'Ultimate Marketing', text: 'You just need to tell your friends about our free templates' },
]

const Card = () => (
  <Container className="relative z-10 -mt-[220px] pt-[30px]">
    <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
      {cards.map(({ title, text }) => (
        <div
          key={title}
          className="group cursor-pointer rounded-soft bg-white p-[30px] text-center shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-2.5"
        >
          <div className="mx-auto mb-[30px] size-[90px] rounded-full bg-brand-violet p-5 transition-all duration-300 ease-in-out group-hover:bg-brand-pink">
            <img src={icon} alt="" />
          </div>
          <h5 className="text-xl font-medium">{title}</h5>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </Container>
)

export default Card
