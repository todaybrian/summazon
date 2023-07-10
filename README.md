# Summazon
![Summazon Cover Image](https://github.com/todaybrian/summazon/assets/13337661/f3dff826-b4c9-4830-918f-1d4a47ee1f04)

Created for the [Google Cloud Vertex AI hackathon](https://lablab.ai/event/google-vertex-ai-hackathon).

## About

**Introducing Summazon: Revolutionizing Amazon Review Summaries.**

In a vast sea of products, navigating through a canopy of Amazon reviews can be overwhelming. That's where *Summazon* comes in. Our cutting-edge AI-powered solution revolutionizes the way Amazon reviews are summarized, offering a comprehensive and insightful analysis of product feedback.

*Summazon* first splits reviews into distinct categories, such as *pros* and *cons*, and uses those reviews to produce assessments on four key metrics: *price*, *performance*, *reliability*, and *quality*. It then takes this categorized review data and generates concise and informative summaries. Ultimately, allowing users to save lots of valuable time and effort, providing them with the essential insights they need to make well-informed purchasing decisions.

Whether you're a tech enthusiast searching for the best-performing gadgets, a budget-conscious buyer comparing prices, or a company seeking product feedback analysis, *Summazon* is your go-to tool for efficient and insightful review assessments.

Now it’s time to say goodbye to information overload and let *Summazon* help you rise above the canopy of Amazon reviews.

## How we built it

Frontend: The front end was constructed using **Next.js** and **Tailwind CSS**, with hosting on **Vercel**. Every time a search is performed on the page, regex is used to extract the product ID from the Amazon Link, and an API request is made to our backend.

Backend: The back end was constructed using **Flask**. When a request is made, Amazon review data is scraped using **Playwright**. This scraped review data is sent along with our prompts to the **Google PaLM-2 Chat-Bison 001** AI (a Large Language Model similar to ChatGPT), for summaries.

## Challenges we encountered:
1. Connecting the front-end and back-end posed significant challenges, with numerous networking and CORS errors. Eventually, we resorted to using a CORS proxy along with ngrok to enable front-end access to the back-end. We recognized the need to gain more experience with server-side requests.
2. Due to the nature of web scraping and AI processing, search requests often experienced significant delays. To mitigate this, we implemented request caching, although further improvement in faster web scraping techniques will be necessary.

## What we learned:
This project introduced us to several technologies we hadn't used before, such as Next.js and the Google Cloud API. We gained valuable experience in incorporating these technologies into our project.

## Accomplishments we are proud of:
Our website successfully leverages Google Cloud Vertex AI to provide users with easy access to organized Amazon review summaries. We take pride in offering a clutter-free and user-friendly format, enabling users to quickly find the reviews they need.

## What's next for *Summazon*

At Summazon, we aim to continually enhance our service, always looking for avenues for our AI-powered tool to provide more value to our users. One of the significant benefits we aim to include in our feature pipeline is the ability to provide product comparisons. 

Product comparison is an essential aspect of shopping, whether online or offline. Often, consumers are torn between two or three similar products, and making the right choice becomes a pain point. With the planned product comparison feature, Summazon aims to not just summarize reviews but to make these summaries comparative. This will provide consumers with a platform where they can easily compare similar products based on the core metrics like price, performance, reliability, and quality.

Furthermore, we aim to extend our service to incorporate more than just Amazon products. Other platforms, such as eBay, Best Buy, Walmart, and more, also host a plethora of product reviews that consumers need help navigating. 

As part of this expansion, we envisage launching browser extensions for closer integration with these various shopping platforms. This implementation will provide a more seamless transition from browsing product reviews to making that final purchase, enhancing user experiences and making online shopping even more convenient.

Finally, we have the ambition of broadening our horizons beyond mere product review summaries. We hope that our algorithm, in time, can be tailored to accurately detect market trends based on consumer reviews. By analyzing the tone and content of reviews, we believe we can provide insight into what products are trending, what features consumers are prioritizing, and even the potential emergence of new market segments.

---
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
