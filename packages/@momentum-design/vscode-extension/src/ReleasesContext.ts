import { createContext } from 'react';
import type { Release } from './components/contents/common/VersionBlock/useReleases';

export const ReleasesContext = createContext<{releases: Array<Release> | undefined, setReleases: any}>({releases: undefined, setReleases: () => {}});