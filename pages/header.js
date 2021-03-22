import Image from 'next/image'
import Head from 'next/head'

export default function Header() {
  return (
    <>
      <Head>
        <title>tl;dr papers</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@tldrpapers" />
        <meta name="twitter:title" content="tl;dr papers" />
        <meta name="twitter:image" content="https://i.imgur.com/o3S9ZOQ.png"/>
        <meta name="twitter:text:title" content="tl;dr papers" />
        <meta name="twitter:description" content="science abstracts for second graders. written by AI." />
        {/* Search Engine */}
        <meta name="description" content="science abstracts for second graders. written by AI."/>
        <meta name="image" content="https://i.imgur.com/o3S9ZOQ.png"/>
        {/* Schema.org for Google */}
        <meta itemprop="name" content="tl;dr papers"/>
        <meta itemprop="description" content="science abstracts for second graders. written by AI."/>
        <meta itemprop="image" content="https://i.imgur.com/o3S9ZOQ.png"/>
        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta name="og:title" content="tl;dr papers"/>
        <meta name="og:description" content="science abstracts for second graders. written by AI."/>
        <meta name="og:image" content="https://i.imgur.com/o3S9ZOQ.png"/>
        <meta name="og:url" content="https://tldrpapers.com"/>
        <meta name="og:site_name" content="tl;dr papers"/>
        <meta name="og:type" content="website"/>
      </Head>
      <Image
        src="/fax-logo.png"
        height={144} 
        width={144} 
        alt="fax logo"
      />
      <h1 className="title">tl;dr papers</h1>
      <p className="sub-title">science abstracts a second grader can understand</p>
    </>    
  )
}