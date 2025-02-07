import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center PX-3 pt-36'>
      <h1 className='text-3xl font-bold tracking-tight'>Find events around you </h1>
      <p>Browse more than 10000 event around you</p>
      <form>
        <input placeholder='search for event in any city...' spellCheck={false}/>
      </form>
      <section>
        <p>Popular:</p>
        <div>
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
      </main>
      )}