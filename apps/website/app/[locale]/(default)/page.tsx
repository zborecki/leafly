import { getTranslations } from 'next-intl/server';

import Text from '@/components/shared/text';

const Home = async () => {
  const t = await getTranslations();

  return (
    <main>
      <Text label='common.hello_world' size='bodyTiny' />
    </main>
  );
};

export default Home;
