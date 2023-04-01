import { trackOpBit } from './effect';

export const initDepMarkers = ({ deps }) => {
  console.log('initDepMarkers');
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
}