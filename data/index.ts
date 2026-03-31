import { Chain } from '@/lib/types';
import { mcdonaldsData } from './mcdonalds';
import { kfcData } from './kfc';
import { nandosData } from './nandos';
import { fiveguysData } from './fiveguys';
import { burgerkingData } from './burgerking';
import { subwayData } from './subway';
import { greggsData } from './greggs';
import { pretData } from './pret'; 
import { costaData } from './costa';
import { starbucksData } from './starbucks';
import { leonData } from './leon';
import { wagamamaData } from './wagamama';
import { pizzahutData } from './pizzahut';
import { dominosData } from './dominos';
import { tortillaData } from './tortilla';
import { itsuData } from './itsu';
import { yosushiData } from './yosushi';
import { gbkData } from './gbk';
import { wetherspoonsData } from './wetherspoons';
import { harvester } from './harvester'

// Export all chains here
export const chains: Chain[] = [
  mcdonaldsData,
  // Add more chains here as you build them:
  // kfcData,
  // nandosData,
  kfcData,
  nandosData,
  fiveguysData,
  burgerkingData,
  subwayData,
  greggsData,
  pretData,
  costaData,
  starbucksData,
  leonData,
  wagamamaData,
  pizzahutData,
  dominosData,
  tortillaData,
  itsuData,
  yosushiData,
  gbkData,
  wetherspoonsData,
  harvester
  
  // etc.
];

// Helper function to get chain by slug
export function getChainBySlug(slug: string): Chain | undefined {
  return chains.find((chain) => chain.slug === slug);
}

// Helper function to get all menu items across all chains
export function getAllMenuItems() {
  return chains.flatMap((chain) => chain.items);
}

// Helper function to get top keto picks across all chains
export function getTopPicks(limit: number = 6) {
  return chains
    .flatMap((chain) =>
      chain.items.filter((item) => chain.topPicks.includes(item.id))
    )
    .slice(0, limit);
}
