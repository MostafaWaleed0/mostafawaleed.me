import GitHubCardsWrapper from 'components/GitHubCardsWrapper';
import Time from 'components/Time';
import { allPosts } from 'contentlayer/generated';
import { sortPosts } from 'lib/sort';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60;

export default async function Home() {
  return (
    <>
      <section className="[ wrapper ] [ region ]">
        <div className="[ headline ] [ flow ]">
          <h1>Hi👋, I&rsquo;m Mostafa.</h1>
          <p>
            I'm a
            <strong className="text-primary-600"> front-end developer </strong>
            living in Egypt. I take pleasure in finding solutions and
            constructing web-based projects. I also write about the web on my{' '}
            <Link href="/blog">blog</Link>.
          </p>
          <Link href="/contact" className="button">
            Collaborate with me
          </Link>
        </div>
      </section>
      <section className="[ posts ] [ region ]">
        <div className="wrapper">
          <header className="cluster" data-align="between">
            <h2 className="fs-700">Recent Posts</h2>
            <div>
              <Link href="/blog" className="text-capitalize">
                see all posts
              </Link>
            </div>
          </header>
          <div className="padding-block-start-200">
            <ol className="auto-grid" role="list">
              {sortPosts(allPosts)
                .slice(0, 4)
                .map(({ slug, title, description, date, banner }) => {
                  return (
                    <li className="card" key={slug}>
                      <div className="card__item">
                        <Image
                          src={banner}
                          width={500}
                          height={300}
                          className="card__image"
                          alt={''}
                        />
                        <div className="card__inner">
                          <Link href={`blog/${slug}`} className="card__link">
                            <h3 className="weight-medium fs-500 margin-block-end-100">
                              {title}
                            </h3>
                          </Link>
                          <p
                            className="[ card__description ] [ line-clamp fs-300 ]"
                            data-line="4"
                          >
                            {description}
                          </p>
                          <p className="card__date">
                            <Time time={date} />
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ol>
          </div>
        </div>
      </section>
      <section className="[ projects ] [ region ]">
        <div className="[ wrapper ]">
          <header className="cluster" data-align="between">
            <h2 className="fs-700">Featured Projects</h2>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mostafa-mw"
                className="text-capitalize"
              >
                see all projects
              </a>
            </div>
          </header>
          <div className="padding-block-start-200">
            <GitHubCardsWrapper />
          </div>
        </div>
      </section>
    </>
  );
}
