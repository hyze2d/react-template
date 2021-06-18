import { AuthState, AuthStore } from '@auth/store';
import { createBaseUseStore } from '@packages/store';

const useAuthStore = createBaseUseStore(AuthState, AuthStore);

export { useAuthStore };
