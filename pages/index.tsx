import Link from 'next/link'
import Container from '../components/Container'
import HomeCards from '../components/HomeCards'
import { languages, tools } from '../data/skillsAndTools'
import Image from 'next/image'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <section className="[ wrapper ] [ region ] [ margin-block-end-900 ]">
          <div className="[ headline ] [ flow ]" data-align="center">
            <h1>
              Hi👋. I&rsquo;m Mostafa, and I&rsquo;m a{' '}
              <strong className="text-primary-600">Frontend Developer </strong>
              based in Egypt
            </h1>
            <p>
              I am currently working as a freelancer. I am passionate about
              building high-quality codes, so if you have a project or questions
              in mind,{' '}
              <Link href="/contact">
                <a> within reach of you now.</a>
              </Link>
            </p>
          </div>
        </section>
        <section className="[ region ] [ bg-inverse ]">
          <div className="wrapper">
            <div className="flex-space-column-responsive">
              <article>
                <div className="[ post ] [ flow ]">
                  <h2 className="headline">About me</h2>
                  <p className="text-justify text-indent-2">
                    Hello. My name is{' '}
                    <em className="text-primary-600 weight-bold style-normal">
                      Mostafa Waleed
                    </em>
                    , and I&apos;m from Egypt. I&apos;m in high school. I always
                    have been in love with technology and its all possibilities,
                    I tried to learn different things like Internet Marketing
                    and Excel, and I&apos;ve always been fascinated with code,
                    and I&apos;ve always wanted to know how sites and
                    applications work, and how I see them on the Internet, My
                    interest in the world of development has increased over
                    time, after browsing, reading and watching clips on YouTube
                    about what are the specializations of development in
                    websites and applications, and I saw that the most specialty
                    that caught my attention was the{' '}
                    <em className="text-primary-600 weight-bold style-normal">
                      Fronted
                    </em>
                    .
                  </p>
                  <strong className="block">
                    I don&apos;t forget when I typed in the console &quot;hello
                    world&quot;, I felt like I was going to hack the security
                    system for the CIA 😅
                  </strong>
                  <h3>
                    I <span className="text-primary-600">♥</span>
                  </h3>
                  <ul className="text-capitalize">
                    <li>playing guitar</li>
                    <li>music</li>
                    <li>working in sass</li>
                    <li>reading</li>
                  </ul>
                </div>
              </article>
              <div className="box-reflect">
                <Image
                  alt=""
                  src="/home-img1.webp"
                  width={410}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="region">
          <div className="wrapper flow">
            <h2 className="headline">Skills and tools</h2>
            <div className="[ flow ] [ text-center font-mono ]">
              <h3>Frontend</h3>
              <ul className="cluster" role="list">
                {languages.map((lang: any) => {
                  return (
                    <li key={lang.id} className="[ square ] [ flow ]">
                      {lang.icon}
                      <em className="fs-300 weight-medium font-mono">
                        {lang.title}
                      </em>
                      {lang.arrow}
                    </li>
                  )
                })}
                <li>
                  <Link href="/frontend">
                    <a className="[ square ] [ flow ]">
                      <em className="fs-300 weight-medium font-mono">More</em>
                      <svg viewBox="0 0 25 25" width="2em">
                        <path
                          className="fill-default"
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="[ flow ] [ text-center font-mono flow-space-900 ]">
              <h3>Tools</h3>
              <ul className="cluster" role="list">
                {tools.map((tool: any) => {
                  return (
                    <li key={tool.id} className="[ square ] [ flow ]">
                      {tool.icon}
                      <em className="fs-300 weight-medium font-mono">
                        {tool.title}
                      </em>
                      {tool.arrow}
                    </li>
                  )
                })}
                <li>
                  <Link href="/tools/">
                    <a className="[ square ] [ flow ]">
                      <em className="fs-300 weight-medium font-mono">More</em>
                      <svg viewBox="0 0 25 25" width="2em">
                        <path
                          className="fill-default"
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <HomeCards />
      </Container>
    </Suspense>
  )
}