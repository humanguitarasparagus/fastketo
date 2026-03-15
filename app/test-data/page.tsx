import { chains } from '@/data';

export default function TestData() {
  return (
    <div className="container-custom py-12">
      <h1>Data Test</h1>
      <pre>{JSON.stringify(chains, null, 2)}</pre>
    </div>
  );
}