import { Box, HStack, Stack } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

export function Pagination() {
  return (
    <Stack direction={['column', 'row']} mt="6" spacing="6" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </HStack>
    </Stack>
  );
}
