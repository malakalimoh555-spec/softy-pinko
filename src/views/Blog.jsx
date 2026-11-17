import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import entry01 from '../assets/images/blog-item-01.png'
import entry02 from '../assets/images/blog-item-02.png'
import entry03 from '../assets/images/blog-item-03.png'

const entries = [
  {
    img: entry01,
    title: 'Vivamus ac vehicula dui',
    text: 'Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.',
  },
  {
    img: entry02,
    title: 'Phasellus convallis augue',
    text: 'Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.',
  },
  {
    img: entry03,
    title: 'Nam gravida purus non',
    text: 'Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.',
  },
]

const Blog = () => (
  <section id="blog" className="my-12 text-center">
    <Container>
      <SectionTitle
        title="Blog Entries"
        text="Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie."
      />
      <div className="mt-12 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
        {entries.map(({ img, title, text }) => (
          <div key={title} className="group cursor-pointer">
            <img src={img} alt="" className="mx-auto" />
            <div>
              <h5 className="py-[15px] text-xl font-medium">
                <a
                  href="#blog"
                  className="text-ink transition-all duration-300 ease-in-out group-hover:text-brand-pink"
                >
                  {title}
                </a>
              </h5>
              <p className="mb-4 text-txt transition-all duration-300 ease-in-out group-hover:text-ink">
                {text}
              </p>
            </div>
            <Button>READ MORE</Button>
          </div>
        ))}
      </div>
    </Container>
  </section>
)

export default Blog
