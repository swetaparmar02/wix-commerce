/* eslint-disable prettier/prettier */
import Image from 'next/image';
import { wixEventsV2 as wixEvents } from '@wix/events';
import { products } from '@wix/stores';
import { Events } from '@app/components/Events/Events';
import testIds from '@app/utils/test-ids';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export function HomeScreen({
  events,
  productsForCategories,
}: {
  events: wixEvents.V3Event[];
  productsForCategories: { category: string; product: products.Product }[];
}) {
  return (
    <div className="mx-auto relative">
      <div className="relative">
        <div className="flex sm:flex-row flex-col bg-zinc-900">
          <div className="basis-1/2 text-center sm:text-left relative">
            <div
              className="px-10 sm:px-14 py-6 bg-site"
              data-testid={testIds.HOME_PAGE.HEADER}
            >
              <h1 className="text-5xl sm:text-[120px] leading-none animate-fade-in">
                USA
                <br /> FOOD
                <br /> CALSSY
              </h1>
              <h3 className="text-base sm:text-2xl py-6">
                A NEW ALBUM BY{' '}
                <span className="text-purple-500">SWE#A P!RM!R</span>
              </h3>
              <div className="flex text-gray-700 gap-4 justify-center sm:justify-start">
              <a href="https://www.facebook.com/HomeCookingShow/"  rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-5 h-5"
                >
                
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
                </a>


                <a href="https://x.com/foodfood"  rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
                </a>
                
                <a href="https://www.instagram.com/foodbeast/?hl=en"  rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
                </a>


                <a href="https://www.youtube.com/c/YourFoodLab"  rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  />
                </svg>
                </a>

                <a href="https://www.linkedin.com/company/food/"  rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                >
                {
                <path 
                     fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zm-46.44-334.4C24.11 113.6 0 89.49 0 60.44 0 27.11 27.11 0 60.44 0s60.44 27.11 60.44 60.44c0 29.05-24.11 53.16-53.16 53.16zM447.9 448h-92.68V302.4c0-34.76-12.47-58.48-43.73-58.48-23.88 0-38.05 16.06-44.31 31.56-2.28 5.56-2.84 13.28-2.84 21.05V448h-92.78s1.25-264.33 0-291.1h92.78v41.23c-.19.3-.46.61-.65.91h.65v-.91c12.31-19 34.31-46.15 83.37-46.15 60.86 0 106.54 39.67 106.54 124.81V448z" />

                  }
                  
                </svg>
                </a>

              </div>
            </div>
            <div className="bg-zinc-900 h-[75px] w-full"></div>
          </div>
          <div className="basis-1/2">
            <Image
              src="/images/hamburger-494706_1280.jpg"
              alt="TALI$A"
              className="w-full px-10 sm:px-0"
              width={1000}
              height={800}
            />
          </div>
        </div>
        {/* <Image
          className="absolute inset-x-2/4 -translate-x-2/4 -translate-y-[20%] bottom-0 top-[20%] hidden sm:block"
          src="/images/bread.png"
          alt="TALI$A"
          width={202}
          height={245}
        /> */}
      </div>
                



      {events?.length ? (
        <div className="bg-zinc-900 text-site pt-16 sm:p-20">
          <Events events={events} />
        </div>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
          {/* No events found. Click{' '} */}
          <a
            href="https://manage.wix.com/account/site-selector?actionUrl=https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fevents%3FreferralInfo%3DHeadless"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500"
          >
            {/* here */}
          </a>{' '}
          {/* to go to the business dashboard to add events. Once added, they will
          appear here. */}
        </div>
      )}
      {productsForCategories.length ? (
        <div className="flex gap-2 sm:gap-14 px-14 flex-col sm:flex-row">
          <div className="text-custom-1 text-center sm:text-left pt-10 sm:py-20 basis-1/2">
            <h1 className="uppercase text-4xl sm:text-7xl text-center sm:text-left text-black">
              Foods
            </h1>
            <p className="text-lg my-10 text-black">
            Products are items or goods that are created, manufactured, or cultivated for sale or use. They can range from physical objects like electronics and clothing to digital goods like software or e-books. Each product typically serves a specific function or fulfills a particular need, offering value to consumers.</p>
            <a
              href="/shop"
              className="btn-main rounded-2xl text-base px-8 py-2.5"
            >
              Get Food
            </a>
            {/* {productsForCategories[1]?.product?.media?.mainMedia ? (
              <div className="mt-10 sm:mt-[300px]">
                <a href="/shop" className="h-auto max-w-full inline-block">
                  <WixMediaImage
                    media={
                      productsForCategories[1]?.product!.media!.mainMedia!
                        .image!.url!
                    }
                    width={800}
                    height={800}
                    alt={
                      productsForCategories[1]?.product!.media!.mainMedia!
                        .image!.altText!
                    }
                  />
                </a>
                <span className="font-bold text-2xl sm:text-5xl block text-center mt-[-15px] sm:mt-[-30px] text-black relative z-10">
                  <a href="/shop">{productsForCategories[1]?.category}</a>
                </span>
              </div>
            ) : null} */}
          </div>
          {/* <div className="basis-1/2">
            {productsForCategories[0]?.product?.media?.mainMedia ? (
              <div className="mt-10 sm:mt-[220px]">
                <a href="/shop" className="h-auto max-w-full inline-block">
                  <WixMediaImage
                    media={
                      productsForCategories[0]?.product!.media!.mainMedia!
                        .image!.url!
                    }
                    width={800}
                    height={800}
                    alt={
                      productsForCategories[0]?.product!.media!.mainMedia!
                        .image!.altText!
                    }
                  />
                </a>
                <span className="font-bold text-2xl sm:text-5xl block text-center mt-[-15px] sm:mt-[-30px] relative z-10">
                  <a href="/shop">{productsForCategories[0]?.category}</a>
                </span>
              </div>
            ) : null}
            {productsForCategories[2]?.product?.media?.mainMedia ? (
              <div className="mt-10 sm:mt-40">
                <a href="/shop" className="h-auto max-w-full inline-block">
                  <WixMediaImage
                    media={
                      productsForCategories[2]?.product?.media!.mainMedia!
                        .image!.url!
                    }
                    width={800}
                    height={800}
                    alt={
                      productsForCategories[2]?.product!.media!.mainMedia!
                        .image!.altText!
                    }
                  />
                </a>
                <span className="font-bold text-2xl sm:text-5xl block text-center mt-[-15px] sm:mt-[-30px] relative z-10">
                  <a href="/shop">{productsForCategories[2]?.category}</a>
                </span>
              </div>
            ) : null}
          </div> */}

            {/* <div className="basis-1/2">   
            {productsForCategories[0]?.product?.media?.mainMedia ? (
              <div className="mt-10 sm:mt-[220px] relative text-center">
                <a href="/shop" className="h-auto max-w-full inline-block">
                  <WixMediaImage
                    media={productsForCategories[0]?.product!.media!.mainMedia!.image!.url!}
                    width={800}
                    height={800}
                    alt={productsForCategories[0]?.product!.media!.mainMedia!.image!.altText!}
                  />
                </a>
                <span className="font-bold text-2xl sm:text-5xl block mt-4 sm:mt-6 text-center">
                  <a href="/shop">{productsForCategories[0]?.category}</a>
                </span>
              </div>
            ) : null}

            {productsForCategories[2]?.product?.media?.mainMedia ? (
              <div className="mt-10 sm:mt-40 relative text-center">
                <a href="/shop" className="h-auto max-w-full inline-block">
                  <WixMediaImage
                    media={productsForCategories[2]?.product?.media!.mainMedia!.image!.url!}
                    width={800}
                    height={800}
                    alt={productsForCategories[2]?.product!.media!.mainMedia!.image!.altText!}
                  />
                </a>
                <span className="font-bold text-2xl sm:text-5xl block mt-4 sm:mt-6 text-center">
                  <a href="/shop">{productsForCategories[2]?.category}</a>
                </span>
              </div>
            ) : null}
          </div> */}
          <div className="text-custom-1 text-center sm:text-left pt-10 sm:py-20 basis-1/2">
    <h1 className="uppercase text-4xl sm:text-7xl text-center sm:text-left text-black">
      Categories
    </h1>
    <p className="text-lg my-10 text-black">
    Products are items or goods that are created, manufactured, or cultivated for sale or use. They can range from physical objects like electronics and clothing to digital goods like software or e-books. Each product typically serves a specific function or fulfills a particular need, offering value to consumers.
    </p>
    <a
      href="/categories"
      className="btn-main rounded-2xl text-base px-8 py-2.5"
    >
      Categories
    </a>
  </div>
</div>
      

        
      ) : (
        <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
          No categories found. Click{' '}
          <a
            href="https://manage.wix.com/account/site-selector?actionUrl=+https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fstore%2Fcategories%2Flist%3FreferralInfo%3DHeadless"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500"
          >
            here
          </a>{' '}
          to go to the business dashboard to create event categories. Once
          added, they will appear here.
        </div>
      )}
    </div>
  );
}
