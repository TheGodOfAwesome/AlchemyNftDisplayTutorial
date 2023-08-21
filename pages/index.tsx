import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Bridge from '../components/Icons/Bridge'
import Logo from '../components/Icons/Logo'
import Modal from '../components/Modal'
import cloudinary from '../utils/cloudinary'
import getBase64ImageUrl from '../utils/generateBlurPlaceholder'
import type { ImageProps } from '../utils/types'
import { useLastViewedPhoto } from '../utils/useLastViewedPhoto'
import { Alchemy, Network } from "alchemy-sdk";

const Home: NextPage = (/*{ images }: { images: ImageProps[] }*/) => {
  const router = useRouter()
  const { photoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()
  const initialState = [];
  const [images, setImages] = useState(initialState);
  const [nft, setNFTs] = useState(initialState);
  const [photos, setPhotos] = useState(initialState);
  let pictures = [];

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  const config = {
    apiKey: "zakquW8exTIodh83mUekym94N3b1S8AM",
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(config);



  useEffect(() => {

    const getNFTs = async () => {
      // Get all NFTs
      const nfts = await alchemy.nft.getNftsForOwner("0xD15BE984F5e58358b905B19e8fdAFced86954970");
      setPhotos(nfts.ownedNfts);

      // Print NFTs
      // console.log(nfts.ownedNfts);

      {
        nfts.ownedNfts.length && nfts.ownedNfts.map(nft => {
          pictures.push(nft.media[0].gateway);
          return (
            pictures
          )
        })
      }
      await setImages(pictures);
      console.log(images);
    }

    getNFTs()
    .then(()=>setImages(pictures))
    .catch(console.error);

    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
      setLastViewedPhoto(null)
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId)
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              {/* <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span> */}
            </div>
            {/* <Logo /> */}
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              NFT Images
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              An example of how to pull and display NFTS froma specific address using Alchemy API!
            </p>
            <a
              href="https://github.com/TheGodOfAwesome/AlchemyNftDisplayTutorial/tree/main"
              className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
              target="_blank"
              rel="noreferrer"
            >
              Open Repo
            </a>
          </div>
          <img
            alt="Next.js Conf photo"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: 'translate3d(0, 0, 0)', paddingTop:"5px" }}
            // placeholder="blur"
            src={images[0]}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
          />
          <img
            alt="Next.js Conf photo"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            
            style={{ transform: 'translate3d(0, 0, 0)', paddingTop:"5px" }}
            // placeholder="blur"
            src={images[1]}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
          />
          <img
            alt="Next.js Conf photo"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            
            style={{ transform: 'translate3d(0, 0, 0)', paddingTop:"5px" }}
            // placeholder="blur"
            src={images[2]}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
          />
          <img
            alt="Next.js Conf photo"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            
            style={{ transform: 'translate3d(0, 0, 0)', paddingTop:"5px" }}
            // placeholder="blur"
            src={images[3]}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
          />
          <img
            alt="Next.js Conf photo"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            
            style={{ transform: 'translate3d(0, 0, 0)', paddingTop:"5px" }}
            // placeholder="blur"
            src={images[4]}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
          />
          <img
            alt="Next.js Conf photo"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            
            style={{ transform: 'translate3d(0, 0, 0)', paddingTop:"5px" }}
            // placeholder="blur"
            src={images[5]}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
          />
          <img
            alt="Next.js Conf photo"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            
            style={{ transform: 'translate3d(0, 0, 0)', paddingTop:"5px" }}
            // placeholder="blur"
            src={images[6]}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
          />
          <img
            alt="Next.js Conf photo"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            
            style={{ transform: 'translate3d(0, 0, 0)', paddingTop:"5px" }}
            // placeholder="blur"
            src={images[7]}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
          />
          {/* {images.map(({ imageURLa }) =>
            (
              <Link
                // key={let i = i + 1}
                href="www.google.com"
                // as={`/p/${id}`}
                // ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                // shallow
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              >
                <img
                  alt="Next.js Conf photo"
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  // placeholder="blur"
                  // blurDataURL={link}
                  src={imageURLa}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
              </Link>
            ))
          } */}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        Thank you to{' '}
        <a
          href="https://edelsonphotography.com/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Josh Edelson
        </a>
        ,{' '}
        <a
          href="https://www.newrevmedia.com/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Jenny Morgan
        </a>
        , and{' '}
        <a
          href="https://www.garysextonphotography.com/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Gary Sexton
        </a>{' '}
        for the pictures.
      </footer>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute()
  let reducedResults: ImageProps[] = []

  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  return {
    props: {
      images: reducedResults,
    },
  }
}
