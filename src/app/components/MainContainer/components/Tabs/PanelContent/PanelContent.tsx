export default function PanelContent() {
    return (
        <div className="flex-1 flex flex-col h-full w-[calc(100vw)] mx-auto p-2 shadow-inner drop-shadow-md bg-muted-foreground/5 overflow-hidden">
            <div className="w-full h-full flex flex-1 max-w-full overflow-y-auto overscroll-contain scroll-hide">
                <div className="w-96 min-w-96">1</div>
                <div className="w-96 min-w-96">2</div>
                <div className="w-96 min-w-96">3</div>
                <div className="w-96 min-w-96">1</div>
                <div className="w-96 min-w-96">2</div>
                <div className="w-96 min-w-96">3</div>
            </div>
        </div>
    )
}
