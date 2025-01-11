// "use client"

// import {
//     Breadcrumb,
//     BreadcrumbList,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbSeparator,
//     BreadcrumbPage,
// } from '@/components/ui/breadcrumb'
// import { useAreasStore } from '@/stores/areas-store';
// import { usePathname } from 'next/navigation';
// import { useEffect } from 'react';

// export default function BreadcrumbMenu() {
//     const pathname = usePathname();
//     const segments = pathname.split('/').filter(Boolean)
//     const { selectActiveArea, selectActiveCategory } = useAreasStore()

//     useEffect(() => {
//         if (segments[1]) {
//             selectActiveArea(segments[1])
//         }
//         if (segments[2]) {
//             selectActiveCategory(segments[2])
//         }
//     }, [segments, selectActiveArea, selectActiveCategory])

//     return (
//         <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
//             <Breadcrumb>
//                 <BreadcrumbList>
//                     {segments.map((segment, index) => {
//                         const isLastIndex = index === segments.length - 1
//                         const path = segments.slice(0, index + 1).join('/')

//                         return isLastIndex ? (
//                             <BreadcrumbItem key={`item-${index}`}>
//                                 <BreadcrumbPage>{segment}</BreadcrumbPage>
//                             </BreadcrumbItem>
//                         ) : (
//                             <div key={`item-${index}`}>
//                                 <BreadcrumbItem className="hidden md:flex">
//                                     <BreadcrumbLink href={`/${path}`}>
//                                         {segment}
//                                     </BreadcrumbLink>
//                                 </BreadcrumbItem>
//                                 <BreadcrumbSeparator className="hidden md:flex" />
//                             </div>
//                         )
//                     })}
//                 </BreadcrumbList>
//             </Breadcrumb>
//         </header >
//     )
// }

// "use client"

// import {
//     Breadcrumb,
//     BreadcrumbList,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbSeparator,
//     BreadcrumbPage,
// } from '@/components/ui/breadcrumb'
// // import { useAreasStore } from '@/stores/areas-store';
// import { usePathname } from 'next/navigation';
// import React from 'react';
// // import { useEffect } from 'react';

// export default function BreadcrumbMenu() {
//     const pathname = usePathname();
//     const segments = pathname.split('/').filter(Boolean);
//     // const { selectActiveArea, selectActiveCategory, activeArea, activeCategory } = useAreasStore();

//     // useEffect(() => {
//     //     // Check if the active area or category needs to be updated
//     //     if (segments[1] && segments[1] !== activeArea?.slug) {
//     //         selectActiveArea(segments[1]);
//     //     }
//     //     if (segments[2] && segments[2] !== activeCategory) {
//     //         selectActiveCategory(segments[2]);
//     //     }
//     // }, [pathname, activeArea, segments, activeCategory, selectActiveArea, selectActiveCategory]);

//     return (
//         <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
//             <Breadcrumb>
//                 <BreadcrumbList>
//                     {segments.map((segment, index) => {
//                         const isLastIndex = index === segments.length - 1;
//                         const path = segments.slice(0, index + 1).join('/');

//                         return isLastIndex ? (
//                             <BreadcrumbItem key={`item-${index}`}>
//                                 <BreadcrumbPage>{segment}</BreadcrumbPage>
//                             </BreadcrumbItem>
//                         ) : (
//                             <React.Fragment key={`item-${index}`}>
//                                 <BreadcrumbItem className="hidden md:flex">
//                                     <BreadcrumbLink href={`/${path}`}>
//                                         {segment}
//                                     </BreadcrumbLink>
//                                 </BreadcrumbItem>
//                                 <BreadcrumbSeparator className="hidden md:flex" />
//                             </React.Fragment>
//                         );
//                     })}
//                 </BreadcrumbList>
//             </Breadcrumb>
//         </header>
//     );
// }
'use client'

// import { useEffect } from 'react';
import { usePathname } from 'next/navigation'
// import { useAreasStore } from '@/stores/areas-store';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import React from 'react'
// import { useAreasStore } from '@/stores/areas-store';

export default function BreadcrumbMenu() {
    const pathname = usePathname()
    // const { activeArea, activeCategory } = useAreasStore();

    const segments = pathname.split('/').filter(Boolean)

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <Breadcrumb>
                <BreadcrumbList>
                    {segments.map((segment, index) => {
                        const isLastIndex = index === segments.length - 1
                        const path = segments.slice(0, index + 1).join('/')

                        return isLastIndex ? (
                            <BreadcrumbItem key={`item-${index}`}>
                                <BreadcrumbPage>{segment}</BreadcrumbPage>
                            </BreadcrumbItem>
                        ) : (
                            <React.Fragment key={`item-${index}`}>
                                <BreadcrumbItem className="hidden md:flex">
                                    <BreadcrumbLink href={`/${path}`}>
                                        {segment}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:flex" />
                            </React.Fragment>
                        )
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </header>
    )
}
