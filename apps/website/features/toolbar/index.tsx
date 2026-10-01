import { MapPinIcon } from 'lucide-react';

import { getSettings } from '@/api/routes/settings';
import Paper from '@/components/shared/paper';
import Wrapper from '@/components/shared/wrapper';
import TextWithIcon from '@/components/text-with-icon';

const Toolbar = async () => {
  const settings = await getSettings();

  console.log(settings);

  return (
    <Paper
      border='bottom'
      className='py-3'
      variant='outlined'
    >
      <Wrapper className='max-w-8xl'>
        <TextWithIcon
          label='common.hello_world'
          leftIcon={<MapPinIcon />}
        />
      </Wrapper>
    </Paper>
  );
};

export default Toolbar;
