'use client'

export default function loaderFunction({ src }: { src: string }) {
  const urlString = src;

  const url = new URL(`${src}`) 
  const widthPara = url.searchParams.get('w')

  if (!widthPara) {  
    url.searchParams.set('w', '900')
    return url.href
  }

  return urlString;
}