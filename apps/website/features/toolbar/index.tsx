import { MapPinIcon } from 'lucide-react';

import { getSettings } from '@/api/routes/settings';
import Paper from '@/components/shared/paper';
import Wrapper from '@/components/shared/wrapper';
import TextWithIcon from '@/components/text-with-icon';
import { formatLocation } from '@/utils/formatLocation';

const Toolbar = async () => {
  const { location } = await getSettings();

  const formattedLocation = formatLocation(location);

  return (
    <Paper
      border='bottom'
      className='py-3'
      variant='outlined'
    >
      <Wrapper className='max-w-8xl'>
        {
          formattedLocation && (
            <TextWithIcon
              label={formattedLocation}
              leftIcon={<MapPinIcon />}
            />
          )
        }
      </Wrapper>
    </Paper>
  );
};

export default Toolbar;
