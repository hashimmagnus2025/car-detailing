import StudioPage from '../../components/StudioPage';

export async function generateMetadata({ params }) {
  const { slug: segments = [] } = await params;
  const slug = segments.join(' / ');
  return { title: `${slug.replaceAll('-', ' ')} | APEX AUTO STUDIO`, description: 'Explore considered automotive care at APEX AUTO STUDIO.' };
}

export default async function Page({ params }) {
  const { slug = [] } = await params;
  return <StudioPage route={slug.join('/')} />;
}
