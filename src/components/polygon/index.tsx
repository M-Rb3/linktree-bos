import styled from 'styled-components';
import { useRouter } from 'next/router';

import { VmComponent } from '@/components/vm/VmComponent';

const Container = styled.div`
  height: 100vh;
`;

export function LinktreeBOS() {
  const { query } = useRouter();

  return (
    <Container>
      <VmComponent
        src="baam25.near/widget/linktree"
        props={{ accountId: process.env.NEXT_PUBLIC_ACCOUNT_ID, theme: process.env.NEXT_PUBLIC_ACCOUNT_ID, ...query }}
      />
    </Container>
  );
}
