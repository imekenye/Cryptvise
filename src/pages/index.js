import { World } from '../components';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <World />
    </Layout>
  );
}
