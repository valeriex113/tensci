import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function InfiniteCardRow({ items, renderItem, visibleCount = 3, gap = 24, intervalMs = 4000 }) {
    const count = items.length;

    // Clone `visibleCount` items from each end so sliding past the real
    // first/last card always has real-looking cards to slide onto.
    const slides =
        count > visibleCount
            ? [...items.slice(-visibleCount), ...items, ...items.slice(0, visibleCount)]
            : items;

    const [index, setIndex] = useState(count > visibleCount ? visibleCount : 0);
    const [withTransition, setWithTransition] = useState(true);
    const isHoveredRef = useRef(false);

    const goNext = useCallback(() => {
        setWithTransition(true);
        setIndex((i) => i + 1);
    }, []);

    const goPrev = useCallback(() => {
        setWithTransition(true);
        setIndex((i) => i - 1);
    }, []);

    // After sliding into the cloned region, snap back to the matching real card, untransitioned
    const handleTransitionEnd = () => {
        if (count <= visibleCount) return;
        if (index >= count + visibleCount) {
            setWithTransition(false);
            setIndex(index - count);
        } else if (index < visibleCount) {
            setWithTransition(false);
            setIndex(index + count);
        }
    };

    useEffect(() => {
        if (count <= visibleCount) return;
        const id = setInterval(() => {
            if (!isHoveredRef.current) goNext();
        }, intervalMs);
        return () => clearInterval(id);
    }, [count, visibleCount, intervalMs, goNext]);

    if (count === 0) return null;

    const cardPercent = 100 / visibleCount;
    const realIndex = count > visibleCount ? ((index - visibleCount) % count + count) % count : 0;

    return (
        <div
            className="relative w-full"
            onMouseEnter={() => (isHoveredRef.current = true)}
            onMouseLeave={() => (isHoveredRef.current = false)}
        >
            <div className="overflow-hidden">
                <div
                    onTransitionEnd={handleTransitionEnd}
                    className="flex"
                    style={{
                        transform: `translateX(calc(-${index * cardPercent}% - ${index * gap}px + ${(index * gap) / 1}px))`,
                        transition: withTransition ? "transform 0.4s ease" : "none",
                        gap: `${gap}px`,
                    }}
                >
                    {slides.map((item, i) => (
                        <div
                            key={i}
                            className="shrink-0"
                            style={{ width: `calc(${cardPercent}% - ${(gap * (visibleCount - 1)) / visibleCount}px)` }}
                        >
                            {renderItem(item, i)}
                        </div>
                    ))}
                </div>
            </div>

            {count > visibleCount && (
                <>
                    <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Previous"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                        style={{ color: "#303841" }}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                        style={{ color: "#303841" }}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    <div className="mt-4 flex items-center justify-center gap-2">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Go to card ${i + 1}`}
                                onClick={() => {
                                    setWithTransition(true);
                                    setIndex(i + visibleCount);
                                }}
                                className="h-2 rounded-full transition-all"
                                style={{
                                    width: i === realIndex ? "20px" : "8px",
                                    backgroundColor: i === realIndex ? "#76ABAE" : "#D9D9D9",
                                }}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}