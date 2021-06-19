import { GeneralState, GeneralStore } from '@store';
import { createBaseUseStore } from '@packages/store';

const useGeneralStore = createBaseUseStore(GeneralState, GeneralStore);

export { useGeneralStore };
