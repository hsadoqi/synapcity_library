'use server'

import { areasData as areas } from '@/stores/areas-store'

export async function fetchAreasData() {
    if (areas.length > 0) {
        return areas
    }
}
