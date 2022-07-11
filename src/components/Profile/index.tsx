import { removeToken } from '@service/auth';
import type { User } from '@service/graphql';

import Layout from '@components/Layout';

function Profile({ user }: { user: User }) {
  const logout = async () => {
    await removeToken();
    window.location.reload();
  };

  return (
    <Layout>
      <p>{user.name}</p>
      <button type="button" onClick={logout}>
        Cerrar sesión
      </button>
    </Layout>
  );
}
