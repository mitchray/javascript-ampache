import { UID } from "../base";

export type CatalogResponse = {
    id: UID,
    name: string,
    type: 'local' | 'remote',
    gather_types: 'podcast' | 'clip' | 'tvshow' | 'movie' | 'personal_video' | 'music',
    enabled: boolean,
    last_add: number,
    last_clean: number,
    last_update: number,
    path: string,
    rename_pattern: string,
    sort_pattern: string,
}

export type CatalogsResponse = {
    total_count: number;
    md5: string;
    catalog: CatalogResponse[];
}