import { MapPinIcon } from 'lucide-react';

import { getSettings } from '@/api/routes/settings';
import Paper from '@/components/shared/paper';
import Wrapper from '@/components/shared/wrapper';
import TextWithIcon from '@/components/text-with-icon';
import { formatLocation } from '@/utils/formatLocation';
import { mergeValues } from '@/utils/mergeValues';

const Toolbar = async () => {
  const { company } = await getSettings();

  const location: string = formatLocation(company.location);

  return (
    <Paper
      border='bottom'
      className='py-3'
      variant='outlined'
    >
      <Wrapper className='max-w-8xl'>
        <TextWithIcon
          label={location}
          leftIcon={<MapPinIcon />}
        />
      </Wrapper>
    </Paper>
  );
};

export default Toolbar;
