import { ScrollArea } from '@/components/ui/scroll-area'
import { TabContent } from '../TabContent'

export default function PanelContent() {
    return (
        <ScrollArea className="h-[calc(80vh)] max-h-[calc(90vh)] md:h-[calc(100vh-50vh)] md:max-h-[calc(38vh)] border-2">
            <TabContent />
        </ScrollArea>
    )
}
