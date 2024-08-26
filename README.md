This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Style of the CTA section for different route
 <div className="px-4 py-8 rounded-lg bg-gradient-to-r from-[#292929] to-[#61006A]">
    <h2 className="text-4xl text-[#ffffff] text-center">
        Let`s start
        <p className="text-[#D400E6] font-black">your project</p>
    </h2>
    <div className="w-full flex justify-center pt-8">
        <button className="w-full flex items-center justify-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#ED1AFF] to-[#D400E6] rounded-full text-xl">
            <Image src={ArrowRight} alt="hero_image"  />
            Get in touch
        </button>
    </div>
</div>
