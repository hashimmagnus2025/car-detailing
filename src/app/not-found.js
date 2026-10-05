import Link from 'next/link';

export default function NotFound() {
  return <div className="not-found"><span className="eyebrow">404 / OFF THE MAP</span><h1>This road<br/><em>ends here.</em></h1><Link className="button lime" href="/">Return to the studio <span aria-hidden="true">↗</span></Link></div>;
}
