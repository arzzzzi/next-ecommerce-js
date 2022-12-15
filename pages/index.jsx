import { data } from '../utils/data';
import Layout from '../components/Layout';
import PrdouctItem from '../components/PrdouctItem';

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <PrdouctItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
}
