
import { Game } from './types';

export const GAMES: Game[] = [
  {
    id: 'genshin',
    name: '原神領域',
    banner: 'https://picsum.photos/seed/genshin/800/400',
    description: '探索無限可能的幻想世界，領取專屬旅者補給包。',
    accentColor: 'blue',
    codes: [
      { id: 'g1', code: 'GENSHIN2026', description: '2026 年度盛典大禮包' },
      { id: 'g2', code: 'NEWYEARGIFT', description: '新春限定體力藥劑' }
    ]
  },
  {
    id: 'cyber',
    name: '賽博戰線',
    banner: 'https://picsum.photos/seed/cyber/800/400',
    description: '穿梭霓虹都市，在電子荒原中搶奪生存物資。',
    accentColor: 'fuchsia',
    codes: [
      { id: 'c1', code: 'CYBER777', description: '傳奇義體改裝套件' },
      { id: 'c2', code: 'READYPLAYER1', description: '初始駭客入侵密鑰' }
    ]
  }
];
