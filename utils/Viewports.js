export const isDesktopViewport = (page) => {
    const displaySize = page.viewportSize();
    return displaySize.width >= 600; //px
}