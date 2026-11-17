import Container from '../components/ui/Container'
import circle from '../assets/images/circle-dec.png'
import bg from '../assets/images/fun-facts-bg.png'

const stats = [
  { num: 126, label: 'Projects', deco: true },
  { num: 63, label: 'Happy Clients', deco: true },
  { num: 126, label: 'Awards Wins', deco: true },
  { num: 27, label: 'Countries', deco: false },
]

const Count = () => (
  <section
    id="count"
    className="bg-cover bg-center bg-no-repeat px-[50px] py-[100px] text-center"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <Container>
      <div className="grid gap-y-8 sm:grid-cols-2 md:grid-cols-4">
        {stats.map(({ num, label, deco }) => (
          <div key={label} className="group flex items-center justify-center">
            <div className="cursor-pointer text-white transition-all duration-300 ease-in-out group-hover:-translate-y-[15px]">
              <p className="text-[35px] font-medium">{num}</p>
              <span>{label}</span>
            </div>
            {deco && (
              <div className="ml-[100px] hidden lg:block">
                <img src={circle} alt="" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
)

export default Count
