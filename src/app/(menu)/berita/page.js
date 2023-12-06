import { Components } from '@/components';
import { Work_Sans, Yeseva_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { getDataArticle, getDataCategories } from '@/services/data';

const yesevaOne = Yeseva_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

const workSans = Work_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default async function Berita() {
  const articles = await getDataArticle();
  const categories = await getDataCategories();

  function formatCreatedAt(createdAt) {
    const date = new Date(createdAt);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date);

    return formattedDate;
  }

  const limitContent = (title, limit) => {
    const words = title.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return title;
  };

  return (
    <>
      <Components.Topmost />
      <Components.Navbar />
      <Components.Header withLink={false} headTitle='Berita dari Kami'>
        <span>
          <Link href='/'>Beranda</Link> / Berita
        </span>
      </Components.Header>
      <main>
        {/* <h1 className='text-dark-blue text-center text-5xl font-bold my-16' style={yesevaOne.style}>
          Coming Soon
        </h1> */}
        <section className='grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-20 md:px-6 lg:px-44'>
          <div className='left px-10 md:px-0 col-span-2'>
            {articles.length > 0 ? (
              <div>
                {articles.map((article) => (
                  <div key={article.id} className='news mt-10 place-self-center'>
                    <Image
                      className='w-full h-auto md:h-auto'
                      // src='/assets/images/fotbar-santunan.jpg'
                      src={`http://localhost:3000/${article.image}`}
                      width={660}
                      height={400}
                      // sizes='100vw'
                      alt='card news'
                    />
                    <div className='my-2 mx-4 flex flex-col'>
                      <div className='flex gap-x-4 mt-2' style={workSans.style}>
                        <div className='write flex gap-x-2'>
                          <svg
                            className='my-auto'
                            width='18'
                            height='20'
                            viewBox='0 0 18 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19'
                              stroke='#159EEC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z'
                              stroke='#159EEC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          <p className='text-sm my-auto'>By {article.account.name}</p>
                        </div>
                        <div className='views flex gap-x-2'>
                          <svg
                            className='my-auto'
                            width='18'
                            height='13'
                            viewBox='0 0 18 13'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M8.98755 1C6.2041 1 3.34886 2.611 1.1011 5.83301C1.03694 5.92599 1.00178 6.0359 1.00007 6.14886C0.99835 6.26181 1.03015 6.37274 1.09146 6.46763C2.81853 9.17108 5.63555 11.2853 8.98755 11.2853C12.3031 11.2853 15.178 9.16465 16.9083 6.45513C16.9682 6.3621 17 6.25381 17 6.14318C17 6.03255 16.9682 5.92425 16.9083 5.83122C15.1741 3.15277 12.2781 1 8.98755 1Z'
                              stroke='#526AE9'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M8.9996 8.99969C10.5775 8.99969 11.8566 7.72056 11.8566 6.14267C11.8566 4.56478 10.5775 3.28564 8.9996 3.28564C7.42171 3.28564 6.14258 4.56478 6.14258 6.14267C6.14258 7.72056 7.42171 8.99969 8.9996 8.99969Z'
                              stroke='#526AE9'
                              strokeWidth='1.5'
                              strokeMiterlimit='10'
                            />
                          </svg>
                          <p className='text-sm my-auto'>48</p>
                        </div>
                        <div className='likes flex gap-x-2'>
                          <svg
                            className='my-auto'
                            width='16'
                            height='15'
                            viewBox='0 0 16 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.5413 1.50364C13.6931 0.653189 12.5686 0.134124 11.3712 0.0402036C10.1737 -0.0537164 8.98209 0.283702 8.01163 0.99151C6.9935 0.234227 5.72624 -0.109161 4.46507 0.030495C3.20389 0.170151 2.04247 0.782479 1.21468 1.74417C0.386899 2.70586 -0.0457584 3.94548 0.0038373 5.21339C0.053433 6.48131 0.581598 7.68335 1.48197 8.57744L6.45124 13.5547C6.86736 13.9642 7.42779 14.1938 8.01163 14.1938C8.59547 14.1938 9.15591 13.9642 9.57203 13.5547L14.5413 8.57744C15.4756 7.63741 16 6.36589 16 5.04054C16 3.71518 15.4756 2.44367 14.5413 1.50364ZM13.413 7.47316L8.44374 12.4424C8.38719 12.4995 8.31989 12.5448 8.24572 12.5758C8.17156 12.6067 8.09199 12.6226 8.01163 12.6226C7.93127 12.6226 7.85171 12.6067 7.77754 12.5758C7.70337 12.5448 7.63607 12.4995 7.57952 12.4424L2.61026 7.44915C1.98271 6.80766 1.6313 5.94594 1.6313 5.04854C1.6313 4.15114 1.98271 3.28942 2.61026 2.64793C3.24975 2.01656 4.11222 1.66254 5.01087 1.66254C5.90952 1.66254 6.77199 2.01656 7.41148 2.64793C7.48587 2.72293 7.57437 2.78246 7.67188 2.82309C7.7694 2.86371 7.87399 2.88463 7.97962 2.88463C8.08526 2.88463 8.18985 2.86371 8.28736 2.82309C8.38488 2.78246 8.47338 2.72293 8.54777 2.64793C9.18726 2.01656 10.0497 1.66254 10.9484 1.66254C11.847 1.66254 12.7095 2.01656 13.349 2.64793C13.9852 3.28101 14.3481 4.13806 14.3601 5.03549C14.372 5.93291 14.0321 6.79933 13.413 7.44915V7.47316Z'
                              fill='#E2315C'
                            />
                          </svg>
                          <p className='text-sm my-auto'>15</p>
                        </div>
                      </div>
                    </div>
                    <div className='mb-8'>
                      <h1 className='text-xl lg:text-3xl' style={yesevaOne.style}>
                        {article.title}
                      </h1>
                      <div
                        className='mt-4 text-justify text-base'
                        style={workSans.style}
                        // dangerouslySetInnerHTML={{ __html: limitContent(article.content, 50) }}
                      />
                      <p className='mt-4 text-justify text-base' style={workSans.style}>
                        {limitContent(article.content, 50)}
                      </p>
                    </div>
                    <Link
                      href={`/berita/${article.title.toLowerCase().replace(/ /g, '-')}`}
                      className='px-6 py-3 bg-accent rounded-full text-primary text-sm lg:text-base font-medium flex gap-x-4 w-fit'
                      style={workSans.style}
                    >
                      Baca lebih lanjut
                      <svg
                        className='my-auto'
                        width='13'
                        height='12'
                        viewBox='0 0 13 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7.21795 11L11.8333 6M11.8333 6L7.21795 1M11.8333 6H1'
                          stroke='#118087'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className='mt-14 text-center' style={workSans.style}>
                <h3 className='text-3xl font-bold'>Coming Soon</h3>
              </div>
            )}
          </div>
          <div className='mt-10 md:mt-0 px-4 md:px-0'>
            <div className='w-full py-3.5 px-5 mt-2 md:mt-10 mx-auto bg-primary text-pasty-blue flex justify-between gap-x-6 rounded'>
              <input
                className='md:w-full bg-primary text-pasty-blue no-focus-outline my-auto'
                type='text'
                placeholder='Search'
                style={workSans.style}
              />
              <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.88894 18.7779C14.7982 18.7779 18.7779 14.7982 18.7779 9.88894C18.7779 4.97971 14.7982 1 9.88894 1C4.97971 1 1 4.97971 1 9.88894C1 14.7982 4.97971 18.7779 9.88894 18.7779Z'
                  stroke='#82D0D5'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M21.0001 21.0001L16.1667 16.1667'
                  stroke='#BFD2F8'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='mt-4 px-4 border-2 border-slate-300'>
              <h3 className='mt-4 text-center lg:text-start text-xl lg:text-4xl' style={yesevaOne.style}>
                Recent Posts
              </h3>
              <div className='mb-6'>
                {articles.slice(0, 2).map((article) => (
                  <div key={article.id} className='card-news mt-6 flex md:block lg:flex gap-x-2.5'>
                    <Image
                      className='rounded-md h-20 w-20 my-auto'
                      src={'/assets/images/doctor3.png'}
                      width={60}
                      height={60}
                      // sizes=''
                      alt='image-post'
                    />
                    <div className='mt-2 lg:my-auto' style={workSans.style}>
                      <p className='text-secondary text-xs md:text-sm'>{formatCreatedAt(article.createdAt)}</p>
                      <p className='mt-1 text-sm md:text-base font-semibold'>{article.title}</p>
                    </div>
                  </div>
                ))}
                {/* <div className='card-news mt-6 flex md:block lg:flex gap-x-2.5'>
                  <Image
                    className='rounded-md h-20 w-20 my-auto'
                    src={'/assets/images/doctor3.png'}
                    width={60}
                    height={60}
                    // sizes=''
                    alt='image-post'
                  />
                  <div className='mt-2 lg:my-auto' style={workSans.style}>
                    <p className='text-secondary text-xs md:text-sm'>Senin, 5 September 2023</p>
                    <p className='mt-1 text-sm md:text-base font-semibold'>
                      This Article’s Title goes Here, but not too long.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className='mt-4 px-4 border-2 border-slate-300 rounded-md'>
              <h3 className='mt-4 text-center text-primary lg:text-start text-xl lg:text-4xl' style={yesevaOne.style}>
                Kategori
              </h3>
              <div className='my-6' style={workSans.style}>
                {categories.map((category) => (
                  <div key={category.id} className='w-full px-4 py-2'>
                    <Link href='#' className='flex justify-between cursor-pointer'>
                      <span className='my-auto text-base lg:text-lg'>{category.name}</span>
                      <span className='py-1 px-3 my-auto text-sm lg:text-base text-white bg-secondary rounded-full'>
                        {categories.length}
                      </span>
                    </Link>
                  </div>
                ))}
                {/* <div className='w-full px-4 py-2'>
                  <Link href='#' className='flex justify-between cursor-pointer'>
                    <span className='my-auto text-base lg:text-lg'>Artikel</span>
                    <span className='py-1 px-3 my-auto text-sm lg:text-base text-white bg-secondary rounded-full'>
                      13
                    </span>
                  </Link>
                </div>
                <div className='w-full px-4 py-2'>
                  <Link href='#' className='flex justify-between cursor-pointer'>
                    <span className='my-auto text-base lg:text-lg'>Health Care</span>
                    <span className='py-1 px-3 my-auto text-sm lg:text-base text-white bg-secondary rounded-full'>
                      3
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Components.GetInTouch />
      <Components.Footer />
    </>
  );
}
